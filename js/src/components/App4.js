import React from 'react';

class App4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: undefined,
			txtNome: ''
		}
	}

	/*
		Se você preencher seu nome, clicar no botão e recarregar a tela, 
		observe que ele se mantém. O componentDidMount buscou o valor no 
		sessionStorage do navegador e alterou o estado assim que o componente 
		renderizou.
	*/
	componentDidMount = () => {
		const nome = sessionStorage.getItem('nome');
		if(nome)
			this.setState({ nome });
	}

	changeTxtNome = (event) => {
		this.setState({ txtNome: event.target.value });
	}

	persistTxtNome = () => {
		this.setState({ nome: this.state.txtNome });
		sessionStorage.setItem('nome', this.state.txtNome);
	}

	render() {
		const renderForm = () => {
			return(
				<>
					Nome: <input type="text" value={ this.state.nome } onChange={ this.changeTxtNome } ></input>
					<button onClick={ this.persistTxtNome }>Salvar</button>
				</>
			);			
		}

		const renderTxt = () => {
			return(
				<>
					<p>Olá { this.state.nome }</p>
				</>
			);			
		}

		return !this.state.nome ? renderForm() : renderTxt();	
	}
}

export default App4;