import "./input.css"
export const InputField = ({ label, id, placeholder, name, value, onChange }) => {
  return (
    <p className="container-input">
      <label className="input-label" htmlFor="">{label}</label>
      <input className="input-content" type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange} />
    </p>
  )
}
