import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o seu formulario...");
  };

  const handleChange = (e) => {
    console.log("Día seleccionado:", e.target.value);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Proposta de novas actividades</h1>
        <input
          type="text"
          placeholder="Actividade proposta"
          onChange={(e) => console.log("on change:", e.target.value)}
        />
        <select onChange={handleChange}>
          <option>--Escolla unha opción--</option>
          <option>Luns</option>
          <option>Martes</option>
          <option>Mércores</option>
          <option>Xoves</option>
          <option>Venres</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
        <button onClick={handleClick}>Clíckame, non sexas tímida!</button>
      </form>
    </>
  );
}

export default App;
