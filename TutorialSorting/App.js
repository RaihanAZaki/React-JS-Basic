import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

  const [state, setState] = React.useState("VOTE");

  // Method Sorting
  const setSortState = (state) => {
    setState(state)
  }

  const getContent = () => {
    let sortedArticles = articles;
    
    if (state === "VOTE") {
      sortedArticles.sort((a,b) => (a.upvotes < b.upvotes) ? 1 : -1)
    } else {
      sortedArticles.sort((a,b) => (a.date < b.date) ? 1 : -1)
    }

    return <Articles articles={sortedArticles}/>
  }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => setSortState("VOTE")} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={() => setSortState("DATE")} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            {getContent()}
        </div>
    );

}

export default App;
