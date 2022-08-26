import React from "react";
import Meaning from './Meaning';
import Phonetics from "./Phonetics";

export default function Result(props) {
	if(props.data) {
		return (
			<div className="result">
				<section>
					<h2>{props.data.word}</h2>
					{props.data.phonetics.map((el, index) => {
						return (
							<div className="phonetic" key={index}>
								<Phonetics data={el}/>
								<p>{el.text}</p>
							</div>
						);
					})}
				</section>
				

				
				{props.data.meanings.map((el, index) => {
					return (
						<section>
						<div key={index}>
							<Meaning meaning={el}/>
						</div>
						</section>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}