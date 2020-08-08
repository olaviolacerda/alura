import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mensagem: this.props.location.query.msg
        };
        this.envia = this.envia.bind(this);
    }

    envia(evento) {
        evento.preventDefault();
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({login: this.login.value, senha: this.senha.value}),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível realizar o login');
                }
            })
            .then(token => {
                localStorage.setItem('auth-token', token);
                browserHistory.push('/timeline');
            }).catch(error => {
            this.setState({mensagem: error.message})
        })

    }


    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.mensagem}</span>
                <form onSubmit={this.envia}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="text" ref={(input) => this.senha = input}/>
                    <input type="submit" value={"login"}/>
                </form>
            </div>
        );
    }
}