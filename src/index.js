import React from "react";
import ReactDom from "react-dom";
import YoutubeSearchApi from "youtube-api-search";
import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyBIRGhgRkX1f_RkVW067wdgOZLskx9JsVg";
const App = () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}

ReactDom.render(<App />, document.querySelector(".container"));