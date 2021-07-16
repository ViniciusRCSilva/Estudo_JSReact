import React from 'react';
import UsersList from './components/usersList'

const App2 = () => {

  const handleClick = (e, id) => {
  alert(`ID do cliente: ${id}`);
}

  const renderCustomers = (customer) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>
          {customer.name}: <button onClick={(e) => handleClick(e, customer.id)}>Informar ID</button>{customer.ides.map(renderIdes)}
          <br/ >
        </li>       
      </div>
    );
  }

  const renderIdes = (ide, index) => {
    return (
      <div className="ide" key={`index-${index}`}>
        <li>
          {ide}
        </li>       
      </div>
    );
  }

  return(
    <div>
      <div>
        <p>Lista de usuários</p>
        <ul className="containerUserList">
          {UsersList.map(renderCustomers)}    
        </ul>
      </div>
    </div>
  );
}

export default App2;
