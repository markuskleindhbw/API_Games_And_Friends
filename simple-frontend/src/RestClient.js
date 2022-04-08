const fetch = require("node-fetch");

/* fetches api data from backend and extracts its json body */
export async function fetchAllFreeGames() {
    return await fetch("http://localhost:3000", {
            mode: "cors",
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            return res;
        });
}