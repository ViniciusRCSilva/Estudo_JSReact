import React, {useState, useEffect} from 'react';

export default function Hooks() {
	const [nome, setNome] = useState(undefined);
	
	useEffect(
		// Monitora a variação de uma informação dentro de um componente
		() => {
			if(nome === undefined){
				setNome(sessionStorage.getItem('nome') || '');
			} else {
				sessionStorage.setItem('nome', nome);
			}
		}, [nome]
	);

	return(
		<>
			Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
			<br />
			Olá {nome}
		</>
	);
}