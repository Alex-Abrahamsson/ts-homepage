import React from 'react';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';

import style from './App.module.scss';

function App() {
    return (
        <div className={style.App}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
