import React, {useState} from 'react';

export default function Dictionary() {
const [value, setValue] = useState("");

function search(e) {
	e.preventDefault();
	alert(`Searching for ${value}`);
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