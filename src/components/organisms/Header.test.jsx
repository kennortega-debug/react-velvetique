import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
  it("renderiza la marca y todos los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole("img", { name: "Logo de Velvetique" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "INICIO" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "TIENDA" })).toHaveAttribute("href", "/shop");
    expect(screen.getByRole("link", { name: "CONTACTO" })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "INICIAR SESIÓN" })).toHaveAttribute("href", "/login");
  });

  it("abre y cierra el menú hamburguesa actualizando su estado accesible", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const botonMenu = screen.getByRole("button", { name: "Abrir menú" });
    fireEvent.click(botonMenu);
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(document.getElementById("menu-principal")).toHaveClass("is-open");

    fireEvent.click(screen.getByRole("button", { name: "Cerrar menú" }));
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("cierra el menú cuando se selecciona un enlace", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
    fireEvent.click(screen.getByRole("link", { name: "TIENDA" }));

    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
