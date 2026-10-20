import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { HomeTemplate } from "./HomeTemplate";

const categorias = [{ id: 1, title: "PIEL", image: "/piel.jpg" }];
const productos = [
  { id: 1, titulo: "Sérum popular", marca: "Marca", precio: 1000, image: "/serum.jpg" },
];

function renderInicio(props = {}) {
  return render(
    <MemoryRouter>
      <HomeTemplate productos={productos} categorias={categorias} {...props} />
    </MemoryRouter>,
  );
}

describe("HomeTemplate", () => {
  it("renderiza la portada y el encabezado", () => {
    renderInicio();

    expect(screen.getByRole("heading", { name: /piel radiante/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Logo de Velvetique" })).toBeInTheDocument();
  });

  it("pasa las categorías y productos recibidos a sus listas", () => {
    renderInicio();

    expect(screen.getByText("PIEL")).toBeInTheDocument();
    expect(screen.getByText("Sérum popular")).toBeInTheDocument();
  });

  it("incluye los beneficios de la página y el pie de página", () => {
    renderInicio();

    expect(screen.getByText("Ingredientes limpios")).toBeInTheDocument();
    expect(screen.getByText("HOJA INFORMATIVA")).toBeInTheDocument();
  });
});
