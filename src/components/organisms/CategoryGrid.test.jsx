import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import { CategoryGrid } from "./CategoryGrid";

function RutaActual() {
  const location = useLocation();
  return <output data-testid="ruta">{`${location.pathname}${location.search}`}</output>;
}

describe("CategoryGrid", () => {
  it("renderiza todas las categorías recibidas", () => {
    const categorias = [
      { id: 1, title: "PIEL", image: "/piel.jpg" },
      { id: 2, title: "CABELLO", image: "/cabello.jpg" },
    ];

    render(
      <MemoryRouter>
        <CategoryGrid categorias={categorias} />
      </MemoryRouter>,
    );

    expect(screen.getByText("PIEL")).toBeInTheDocument();
    expect(screen.getByText("CABELLO")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("muestra el encabezado y una lista vacía cuando no recibe categorías", () => {
    const { container } = render(
      <MemoryRouter>
        <CategoryGrid />
      </MemoryRouter>,
    );

    expect(screen.getByText("SHOP BY CATEGORY")).toBeInTheDocument();
    expect(container.querySelectorAll(".tarjeta-categoria")).toHaveLength(0);
  });

  it("navega a la tienda usando el slug de la categoría", () => {
    render(
      <MemoryRouter>
        <CategoryGrid categorias={[{ id: 1, title: "Piel Radiante", image: "" }]} />
        <RutaActual />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("Piel Radiante"));
    expect(screen.getByTestId("ruta")).toHaveTextContent(
      "/shop?category=piel-radiante",
    );
  });
});
