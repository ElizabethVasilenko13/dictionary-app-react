import React from "react";
import Example from './Example';

export default function Meaning(props) {
	function synonyms() {
		if (props.meaning.synonyms) {
			return <ul>
				{props.meaning.synonyms.map((el, index) => {
					return <li>{el}</li>;
				})}
			</ul>
		}
	}
	
	return (
		<div>
			
			<h3>{props.meaning.partOfSpeech}</h3>
			{synonyms()}
			{props.meaning.definitions.map((definition, index) => {
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<Example data = {definition}/>
					</div>
				);
			})}
		</div>
	);
}