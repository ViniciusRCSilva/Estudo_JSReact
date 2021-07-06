import React from 'react';

class App extends React.Component{
  render() {
    return (
      // Tag vazia (Fragment)
      <>
        <p>Meu primeiro parágrafo</p>
        <p>Meu segundo parágrafo</p>
        <div>
          <pre>Cansei de parágrafos...</pre>
        </div>
        <p>{ new Date().toLocaleDateString("pt-BR") }</p>
      </>      
      );
  }
}

export default App;
