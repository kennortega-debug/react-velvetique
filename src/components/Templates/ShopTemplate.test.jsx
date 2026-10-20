import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ShopTemplate } from "./ShopTemplate";

const productos = [
  { id: 1, category: "Cuidado facial", image: "/crema.jpg", titulo: "Crema", precio: 1000 },
  { id: 2, category: "Cuidado facial", image: "/serum.jpg", titulo: "Sérum", precio: 2000 },
  { id: 3, category: "Maquillaje", image: "/labial.jpg", titulo: "Labial", precio: 3000 },
];

function renderTienda(props = {}, initialEntry = "/shop") {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <ShopTemplate todosLosProductos={productos} {...props} />
    </MemoryRouter>,
  );
}

describe("ShopTemplate", () => {
  it("agrupa y muestra productos bajo sus categorías", () => {
    renderTienda();

    expect(screen.getByRole("heading", { name: "Cuidado facial" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Maquillaje" })).toBeInTheDocument();
    expect(screen.getByText("Crema")).toBeInTheDocument();
    expect(screen.getByText("Sérum")).toBeInTheDocument();
    expect(screen.getByText("Labial")).toBeInTheDocument();
  });

  it("renderiza encabezado y pie de página aunque no haya productos", () => {
    renderTienda({ todosLosProductos: [] });

    expect(screen.getByRole("img", { name: "Logo de Velvetique" })).toBeInTheDocument();
    expect(screen.getByText("ENVÍO GRATIS")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Cuidado facial" })).not.toBeInTheDocument();
  });

  it("desplaza a la sección solicitada por el parámetro de categoría", () => {
    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    renderTienda({}, "/shop?category=cuidado-facial");

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
