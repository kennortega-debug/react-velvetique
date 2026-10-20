import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import { ProductCard } from "./ProductCard";

const producto = {
  id: 42,
  image: "/serum.jpg",
  titulo: "Sérum hidratante",
  marca: "Velvetique",
  precio: "12990",
};

function RutaActual() {
  const location = useLocation();
  return <output data-testid="ruta">{location.pathname}</output>;
}

function renderTarjeta() {
  return render(
    <MemoryRouter>
      <ProductCard {...producto} />
      <RutaActual />
    </MemoryRouter>,
  );
}

describe("ProductCard", () => {
  it("renderiza el nombre, la marca y el precio del producto", () => {
    renderTarjeta();

    expect(screen.getByText(producto.titulo)).toBeInTheDocument();
    expect(screen.getByText(producto.marca)).toBeInTheDocument();
    expect(screen.getByText("$12990")).toBeInTheDocument();
  });

  it("muestra la imagen con el título como texto alternativo", () => {
    renderTarjeta();

    expect(screen.getByRole("img", { name: producto.titulo })).toHaveAttribute(
      "src",
      producto.image,
    );
  });

  it("navega a la página de detalle al pulsar el botón", () => {
    renderTarjeta();

    fireEvent.click(screen.getByRole("button", { name: "DETALLES" }));
    expect(screen.getByTestId("ruta")).toHaveTextContent("/producto/42");
  });
});
