import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renderiza los cuatro beneficios de servicio", () => {
    render(<Footer />);

    expect(screen.getByText("ENVÍO GRATIS")).toBeInTheDocument();
    expect(screen.getByText("DEVOLUCIÓN FÁCIL")).toBeInTheDocument();
    expect(screen.getByText("PAGO SEGURO")).toBeInTheDocument();
    expect(screen.getByText("SOPORTE 24/7")).toBeInTheDocument();
  });

  it("muestra la marca y los enlaces rápidos", () => {
    render(<Footer />);

    expect(screen.getAllByText("VELVETIQUE").length).toBeGreaterThan(0);
    expect(screen.getByText("ENLACES RÁPIDOS")).toBeInTheDocument();
    expect(screen.getByText("Sobre nosotros")).toBeInTheDocument();
    expect(screen.getByText("ATENCIÓN AL CLIENTE")).toBeInTheDocument();
  });

  it("renderiza el campo de correo y el botón de suscripción", () => {
    render(<Footer />);

    expect(
      screen.getByPlaceholderText("Ingresa tu correo electrónico"),
    ).toHaveAttribute("type", "email");
    expect(screen.getByRole("button", { name: "Suscríbete" })).toBeInTheDocument();
  });
});
