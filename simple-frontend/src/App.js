import React from "react";
import { fetchAllFreeGames } from "./RestClient.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    async fetchDisplayData() {
        let data = await fetchAllFreeGames();
        this.setState({ games: data });
    }

    // this is displayed on the screen
    render() {
        return (<div>
            <div id="title" > Games and Friends </div>
            <button id="fetcher" onClick={this.fetchDisplayData}>Check out the new free games!</button>
            <div className="data" >
                <div>course: title - publisher</div>
                <br></br>
                {this.state.games.map((freegame, key) => (
                    <div key={key}> {freegame.title}: {freegame.publisher} </div>
                ))}
            </div> </div>
        );
    }
}

export default App;