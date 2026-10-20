import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renderiza la etiqueta, el tipo y el placeholder", () => {
    render(
      <TextInput
        id="email"
        label="Correo electrónico"
        type="email"
        placeholder="nombre@correo.com"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute(
      "type",
      "email",
    );
    expect(screen.getByPlaceholderText("nombre@correo.com")).toBeInTheDocument();
  });

  it("pasa los cambios de texto al manejador recibido", () => {
    const onChange = vi.fn();
    function CampoControlado() {
      const [valor, setValor] = useState("");
      const cambiarValor = (event) => {
        onChange(event);
        setValor(event.target.value);
      };

      return (
        <TextInput
          id="nombre"
          label="Nombre"
          value={valor}
          onChange={cambiarValor}
        />
      );
    }

    render(<CampoControlado />);

    const input = screen.getByLabelText("Nombre");
    fireEvent.change(input, {
      target: { value: "Ana" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("Ana");
  });

  it("muestra el icono y asocia la ayuda accesible al campo", () => {
    render(
      <TextInput
        id="clave"
        label="Contraseña"
        icon="bi-lock"
        hint="Usa al menos ocho caracteres."
        required
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText("Contraseña")).toBeRequired();
    expect(screen.getByLabelText("Contraseña")).toHaveAttribute(
      "aria-describedby",
      "clave-hint",
    );
    expect(screen.getByText("Usa al menos ocho caracteres.")).toHaveAttribute(
      "id",
      "clave-hint",
    );
    expect(document.querySelector(".bi-lock")).toBeInTheDocument();
  });
});
