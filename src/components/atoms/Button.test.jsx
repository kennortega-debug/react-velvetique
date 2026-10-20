import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza la etiqueta recibida y ejecuta onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Comprar</Button>);

    fireEvent.click(screen.getByRole("button", { name: "Comprar" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("aplica la variante y las clases recibidas", () => {
    render(
      <Button variant="secondary" className="ancho-completo">
        Ver más
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Ver más" })).toHaveClass(
      "btn-secondary",
      "ancho-completo",
    );
  });

  it("usa el tipo button por defecto y permite configurar el tipo", () => {
    const { rerender } = render(<Button>Normal</Button>);
    expect(screen.getByRole("button", { name: "Normal" })).toHaveAttribute(
      "type",
      "button",
    );

    rerender(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute(
      "type",
      "submit",
    );
  });
});
