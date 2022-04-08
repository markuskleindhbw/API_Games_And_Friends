import React from "react";
import { fetchAllFreeGames } from "./RestClient.js";
class App extends React.Component {
    // constructor initializes component state data
    // and binds methods
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    // requests and waits for data by calling RestClient's
    // fetchAllFreeGames. as soon as the data is there it is set
    // as a state
    async fetchDisplayData() {
        let data = await fetchAllFreeGames();
        this.setState({ games: data }); 
    }

    // this is displayed on the screen
    render() {
        return ( <div>
            <div id = "title" > Games and Friends </div>   
            <button id="fetcher" onClick={this.fetchDisplayData}>Das ist ein Test</button>
            <div className = "data" > { /* generates a div for every entry */ } {
                this.state.games.map((freegame, key) => ( 
                <div key = { key }> { freegame.title } by { freegame.publisher } </div>
                ))
            } </div> </div>
        );
    }
}

export default App;