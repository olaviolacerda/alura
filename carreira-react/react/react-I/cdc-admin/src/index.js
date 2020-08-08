import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './componentes/Home';
import './index.css';

ReactDOM.render(
    (<Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/autor" component={AutorBox} />
                <Route path="/livro" component={LivroBox} />
            </Switch>
        </App>
    </Router>),
    document.getElementById('root')
);
