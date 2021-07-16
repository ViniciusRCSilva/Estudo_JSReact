import React from 'react';

const App3 = () => {

  const name = 'Vinicius Rodrigues';

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  }

  const showEvent = (e) => {
    console.log(e);
    alert(name);
  }

  const deleteButton = <button onClick={showEvent}>Mostrar evento</button>

  return(
    <div>
      <input className="divInput" onChange={handleChange} />
      <br />
      {deleteButton}
    </div>
  );
}

export default App3;
