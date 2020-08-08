import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import {Router, Route, browserHistory} from 'react-router';
import {matchPattern} from 'react-router/lib/PatternUtils';
import NotFound from './componentes/NotFound';

function verificaAutenticacao(nextState, replace)
{
    const resultadoComparaUrl = matchPattern('/timeline(/:login)', nextState.location.pathname);
    const enderecoPrivadoTimeline = resultadoComparaUrl.paramValues[0] === undefined;
    const tokenIsNull = localStorage.getItem('auth-token') === null;

    if (tokenIsNull && enderecoPrivadoTimeline) {
        replace('/?msg=você precisa estar logado para acessar o endereço');
    }
}

render(
    <Router history={browserHistory}>
        <Route path={"/"} component={Login}/>
        <Route path={"/timeline(/:login)"} component={App} onEnter={verificaAutenticacao}/>
        <Route path={"/logout"} component={Logout} />
        <Route path={"*"} component={NotFound} />
    </Router>,
    document.getElementById('root')
);

