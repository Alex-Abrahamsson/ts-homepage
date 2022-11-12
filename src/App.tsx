import style from './App.module.scss';
import React from 'react';
import Home from './pages/home/home';
import CvPage from './pages/cv/cvPage';
import Stugan from './pages/stugan/stugan';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Container className={style.App}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cv" component={CvPage} />
                    <Route path="/stugan" component={Stugan} />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
