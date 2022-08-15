import React, {useState} from 'react';
import axios from 'axios';
import Result from "./Result";

export default function Dictionary() {
	const [value, setValue] = useState("");
	const [result, setResult] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		setResult(response.data[0]);
	}
	function search(e) {
		e.preventDefault();
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleChange(e) {
		e.preventDefault();
		setValue(e.target.value);
	}
		return (
			<div className='dictionary'>
				<form onSubmit={search}>
					<input type="search" onChange={handleChange}/> 
					<Result data={result}/>
				</form>
				<footer> <a href='https://github.com/ElizabethVasilenko13/dictionary-app-react'> Open-source code</a> by Elizabeth Vasilenko </footer>
			</div>
		);
}