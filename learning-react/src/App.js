import React from 'react';

const buttonA = <button>Histórico do cliente</button>
const buttonB = <button>Cadastrar cliente</button>

const hasCustomer = true;

const App = () => {

  const renderShowHistory = () => (
    <div>
      Clique para visualizar o histórico do cliente
      <br />
      {buttonA}
    </div>  
  );
  
  const renderAddCustomer = () => (
    <div>
      Clique para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  );

  const customer = 'Vinicius Rodrigues';

  const showCustomer = () => {
    if(!hasCustomer) return null;

    return(
      <div>
        <p>{customer}</p>
      </div>
    );
  }

  return(
    <div>
      <div>
        {/*--------- if ----------------- else ---------------*/}
        {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      </div>
      <div>
        {showCustomer()}
      </div>
    </div>
  );
}

export default App;
