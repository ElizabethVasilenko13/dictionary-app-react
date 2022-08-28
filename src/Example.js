import React from "react";

export default function Example(props){
	
	if (props.data.example) {
		return (
			<em className="example"><p>Example: {props.data.example}</p></em>
		);
	} 
	
}