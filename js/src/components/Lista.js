import React from 'react';

class Lista extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			itens: [
				{id: 1, nome:'item1', completo: false},
				{id: 2, nome:'item2', completo: false},
				{id: 3, nome:'item3', completo: true},
				{id: 4, nome:'item4', completo: false},
			] 
		}	
	}

	render() {
		return(
			<>
				<ul>
					{ React.Children.map(this.props.children, child => child.type == Item ? child : null) }
					{ this.state.itens.map(item => (<Item key={ item.id } id={ item.id } completo={ item.completo }>{ item.nome }</Item>)) }
				</ul>
			</>
		);
	}
}

class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const textDecoration = this.props.completo ? 'line-through' : 'none'

		return(
			<>
				<li data-id={ this.props.id } style={{ textDecoration }}>
					{ this.props.children }
				</li>
			</>
		)
	}
}

export { Lista, Item };