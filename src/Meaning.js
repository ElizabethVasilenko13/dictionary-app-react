import React from "react";

export default function Meaning(props) {
	return (
		<div>
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map((definition, index) => {
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<em><p>{definition.example}</p></em>
					</div>
				);
			})}
		</div>
	);
}