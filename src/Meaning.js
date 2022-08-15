import React from "react";

export default function Meaning(props) {
	return (
		<div>
			<h3>{props.meaning.partOfSpeech}</h3>
			<p>{props.meaning.definitions[0].definition}</p>
			<em><p>{props.meaning.definitions[0].example}</p></em>
			{/* {props.meaning.definitions.map((definition, index) => {
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<em><p>{definition.example}</p></em>
					</div>
				);
			})} */}
		</div>
	);
}