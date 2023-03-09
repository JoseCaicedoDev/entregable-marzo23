export const Card = ({ name, colorHex }) => {
  return (
    <div style={{
      width: "300px",
      border: "1px solid gray",
      borderRadius: "10px",
      marginTop: "20px",
      textAlign: "center"
    }} >
      <h2>Hola {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{
        background: colorHex,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: 700
      }}>
        <p>{colorHex}</p>
      </div>
    </div>
  )
}
