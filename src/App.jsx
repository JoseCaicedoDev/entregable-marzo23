import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { Card } from "./components/Card";
import { Error } from "./components/Error";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    color: "",
    error: false,
    formSubmitted: false
  })

  const handleNameChange = ({ target }) => {
    const { value } = target
    setFormState({
      ...formState,
      name: value
    })
  }
  const handleColorChange = ({ target }) => {
    const { value } = target
    setFormState({
      ...formState,
      color: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, color } = formState

    if (name.trim().length < 3 ||
      /^\s/.test(name) ||
      color.trim().length < 6) {

      setFormState({
        ...formState,
        error: true,
        formSubmitted: true
      })

    } else {
      setFormState({
        ...formState,
        error: false,
        formSubmitted: true
      })
    }
  }

  const { name, color, error, formSubmitted } = formState
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nombre"
          id="name"
          placeholder="Ingresa tu nombre"
          name="name"
          value={name}
          onChange={handleNameChange} />
        <InputField
          label="Color"
          id="color"
          name="color"
          placeholder="Ingresa tu color favorito"
          value={color}
          onChange={handleColorChange} />
        <input type="submit" value="Enviar" />
      </form>
      {
        formSubmitted &&
        (error ?
          <Error message="Por favor chequea que la información sea correcta" />
          :
          <Card name={name} colorHex={color} />
        )
      }
    </div>
  );
}

export default App;
