export const Card = ({ name, colorHex }) => {
  return (
    <div style={{ width: "300px", border: "1px solid gray", textAlign: "center" }} >
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div>
        <p>{colorHex}</p>
      </div>
    </div>
  )
}
