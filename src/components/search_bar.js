import React, {Component} from "react";
import YoutubeSearchApi from "youtube-api-search";

class SearchBar extends Component{

    constructor (props) {
        super(props);
        this.state = {term : ""};

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return( 
            <div>
                <input
                    value = {this.state.term} 
                    onChange = {this.onInputChange}
                />
            </div>
            );
    }
    
    onInputChange(event) {
        const value = event.target.value;
        this.setState({
            term : value
        })
    }

    

}

export default SearchBar ;