import style from './App.module.scss';
import React from 'react';
import Home from './pages/home/home';
import CvPage from './pages/cv/cvPage';
import Stugan from './pages/stugan/stugan';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Friggan from './pages/friggan/friggan';
import Dasset from './pages/dasset/dasset';
import AppPage from './pages/appPage/appPage';

function App() {
    return (
        <Container className={style.App}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cv" component={CvPage} />
                    <Route path="/appPage" component={AppPage} />
                    <Route path="/stugan" component={Stugan} />
                    <Route path="/friggan" component={Friggan} />
                    <Route path="/dasset" component={Dasset} />
                </Switch>
            </Router>
            <Footer/>
        </Container>
    );
}

export default App;
