import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { ProductGrid } from "./ProductGrid";

describe("ProductGrid", () => {
  it("renderiza todos los productos recibidos", () => {
    const productos = [
      { id: 1, titulo: "Sérum", marca: "Velvetique", precio: 19990, image: "/serum.jpg" },
      { id: 2, titulo: "Crema", marca: "Velvetique", precio: 24990, image: "/crema.jpg" },
    ];

    render(
      <MemoryRouter>
        <ProductGrid productos={productos} />
      </MemoryRouter>,
    );

    expect(screen.getByText("POPULARES")).toBeInTheDocument();
    expect(screen.getByText("Sérum")).toBeInTheDocument();
    expect(screen.getByText("Crema")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "DETALLES" })).toHaveLength(2);
  });

  it("muestra el encabezado sin tarjetas si la lista está vacía", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductGrid productos={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText("POPULARES")).toBeInTheDocument();
    expect(container.querySelectorAll(".caluga-producto")).toHaveLength(0);
  });

  it("usa una lista vacía cuando no se proporciona productos", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductGrid />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll(".caluga-producto")).toHaveLength(0);
  });
});
