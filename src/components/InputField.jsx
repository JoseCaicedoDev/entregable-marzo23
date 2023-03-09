export const InputField = ({ label, id, placeholder, name, value, onChange }) => {
  return (
    <p>
      <label htmlFor="">{label}</label>
      <input type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange} />
    </p>
  )
}
