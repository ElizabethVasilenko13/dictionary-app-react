import React, {useState} from 'react';
import axios from 'axios';
import Result from "./Result";
import Photos from "./Photos";
import './Student.css';

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [loaded, setLoaded] = useState(false);
	const [result, setResult] = useState(null);
	const [photos, setPhotos] = useState([]);

	function handleResponse(response) {
		setResult(response.data[0]);
	}

	function handleImages(response) {
		setPhotos(response.data.photos);
		console.log(response.data);
	}

	function handleResponse(response) {
		setResult(response.data[0]);
		let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
		let apiKey = "563492ad6f91700001000001a38704c48de24ab2b4fdbd979d16125a";
		axios.get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } }).then(handleImages);
	}

	function load() {
		setLoaded(true);
		search();
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function search() {
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}
	
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	if (loaded) {
		return (
			<div className='dictionary'>
				<h1>React Dictionary</h1>
				<form onSubmit={handleSubmit}>
					<section>
						<label>What word do you want to look up?</label>
						<input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} placeholder="Enter keyword"/> 
					</section>
					<Result data={result}/>
					<Photos photos={photos} />
				</form>
				<footer> <a href='https://github.com/ElizabethVasilenko13/dictionary-app-react'> Open-source code</a> by Elizabeth Vasilenko </footer>
			</div>
		);
	} else {
		load();
		return "Loading!"
	}
}