import React from "react";
import Meaning from './Meaning';
import Phonetics from "./Phonetics";

export default function Result(props) {
	if(props.data) {
		return (
			<div className="result">
				<h2>{props.data.word}</h2>
				{props.data.phonetics.map((el, index) => {
					return (
						<div key={index}>
							<p>{el.text}</p>
							<Phonetics data={el}/>
						</div>
					);
					
				})}
				
				{props.data.meanings.map((el, index) => {
					return (
						<div key={index}>
							<Meaning meaning={el}/>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}