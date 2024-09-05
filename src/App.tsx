import React from 'react';
import logo from './logo.svg';
import './App.css';


class WikipediaItem {
    project: string = "";
    article: string = "";
    granularity: string = "";
    timestamp: string = "";
    access: string = "";
    agent: string = "";
    views: number = 0;
}

class WikipediaQuery {
    items: Array<WikipediaItem> = [];
}

export async function getWikipediaPageView(topic: string) {
    const url: string = encodeURI(`https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/all-agents/${topic}/monthly/20231001/20231031`);
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let jsonObject: WikipediaQuery = await response.json();
        let queryData: WikipediaItem = jsonObject.items[0];
        console.log(queryData);
        console.log(queryData.views);
    }
    catch (error) {
        console.log(`Failed to fetch Wikipedia pageviews: ${error}`);
    }
}

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">
                Tailwind be good plz
            </h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </header>
        </div>
    );
}

export default App;
