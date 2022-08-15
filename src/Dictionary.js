import React, {useState} from 'react';
import axios from 'axios';

export default function Dictionary() {
	const [value, setValue] = useState("");
	function handleResponse(response) {
		console.log(response.data[0]);
	}
	function search(e) {
		e.preventDefault();
		alert(`Searching for ${value}`);
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
				</form>
			</div>
		);
}