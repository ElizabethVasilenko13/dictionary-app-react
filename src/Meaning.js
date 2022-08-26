import React from "react";
import Example from './Example';

export default function Meaning(props) {
	function synonyms() {
		if (props.meaning.synonyms) {
			return <ul className="synonyms">
				{props.meaning.synonyms.map((el, index) => {
					return <li key={index}>{el}</li>;
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
						<ul>
							<li>{definition.definition}</li>
						</ul>
						
						<Example data = {definition}/>
					</div>
				);
			})}
		</div>
	);
}