import React from "react";
import { fetchAllFreeGames } from "./RestClient.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freegames: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    async fetchDisplayData() {
        let data = await fetchAllFreeGames();
        this.setState({ freegames: data });
    }
    render() {
        return (<div>
            <div id="title" > Games and Friends </div>
            <button id="fetcher" onClick={this.fetchDisplayData}>Check out what's free!</button>
            <div className="data" >
                <br></br>
                {this.state.freegames.map((freegame, key) => (
                    <div key={key}>
                        {freegame.title}: {freegame.publisher} - {freegame.tag} - {freegame.fsk} - {freegame.description} </div>
                ))}
                <br></br>
            </div> </div>
        );
    }

}

export default App;