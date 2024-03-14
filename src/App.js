import React from 'react';
import './App.css';
import Header from './containers/Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import codecommune from './containers/codecommune';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={codecommune} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
