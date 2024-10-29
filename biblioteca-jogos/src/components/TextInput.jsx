export default function TextInput({ id, label, value, setValue }) {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center"}}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
