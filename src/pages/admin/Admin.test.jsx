import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Admin from "./Admin";

const productoInicial = {
  id: 1,
  code: "SKU-1",
  name: "Sérum de prueba",
  description: "Descripción del producto",
  price: 10000,
  stock: 10,
  criticalStock: 2,
  category: "SKIN CARE",
  image: "/serum.jpg",
  images: ["/serum.jpg"],
  brand: "Marca",
  visible: true,
};

function renderAdmin(onProductosChange = vi.fn()) {
  render(
    <MemoryRouter>
      <Admin
        productosDelCatalogo={[productoInicial]}
        onProductosChange={onProductosChange}
      />
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByRole("button", { name: "Productos" }));
  return onProductosChange;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Administración de productos", () => {
  it("permite editar un producto y persiste los cambios", () => {
    const guardar = renderAdmin();
    fireEvent.click(screen.getByRole("button", { name: "Editar" }));
    fireEvent.change(screen.getByLabelText("Nombre *"), {
      target: { value: "Sérum actualizado" },
    });
    fireEvent.change(screen.getByLabelText("Precio *"), {
      target: { value: "15990" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Guardar producto" }));

    expect(guardar).toHaveBeenCalledWith([
      expect.objectContaining({
        id: 1,
        name: "Sérum actualizado",
        price: 15990,
      }),
    ]);
    expect(screen.getByText("Sérum actualizado")).toBeInTheDocument();
  });

  it("permite agregar un producto al catálogo", () => {
    const guardar = renderAdmin();
    fireEvent.click(screen.getByRole("button", { name: "+ Nuevo producto" }));
    fireEvent.change(screen.getByLabelText("Código *"), {
      target: { value: "SKU-NEW" },
    });
    fireEvent.change(screen.getByLabelText("Nombre *"), {
      target: { value: "Nuevo sérum" },
    });
    fireEvent.change(screen.getByLabelText("Precio *"), {
      target: { value: "12000" },
    });
    fireEvent.change(screen.getByLabelText("Stock *"), {
      target: { value: "8" },
    });
    fireEvent.change(screen.getByLabelText("Categoría *"), {
      target: { value: "SKIN CARE" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Guardar producto" }));

    expect(guardar).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: "Nuevo sérum", price: 12000 }),
      ]),
    );
    expect(screen.getByText("Nuevo sérum")).toBeInTheDocument();
  });

  it("permite ocultar y volver a publicar un producto", () => {
    const guardar = renderAdmin();
    fireEvent.click(screen.getByRole("button", { name: "Ocultar" }));

    expect(guardar).toHaveBeenLastCalledWith([
      expect.objectContaining({ id: 1, visible: false }),
    ]);
    expect(screen.getByRole("button", { name: "Publicar" })).toBeInTheDocument();
  });

  it("elimina un producto confirmado", () => {
    const guardar = renderAdmin();
    vi.spyOn(window, "confirm").mockReturnValue(true);
    fireEvent.click(screen.getByRole("button", { name: "Eliminar" }));

    expect(guardar).toHaveBeenLastCalledWith([]);
    expect(screen.queryByText("Sérum de prueba")).not.toBeInTheDocument();
  });
});
