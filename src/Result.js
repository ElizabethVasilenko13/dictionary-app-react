import React from "react";
import Meaning from './Meaning';

export default function Result(props) {
	if(props.data) {
		return (
			<div className="result">
				<h2>{props.data.word}</h2>
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