var data = require("data");
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
	<div>
		<h1>my name is {data.name}</h1>
		<h2>my friend name is {data.guest}</h2>
	</div>,
	
	document.body
)