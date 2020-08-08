import React, {Component} from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import BotaoSubmitCustomizado from "./componentes/BotaoSubmitCustomizado";
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

class FormularioAutor extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            senha: ''
        };
        this.enviaForm = this.enviaForm.bind(this);
    }

    enviaForm(evento) {
        let self = this;
        evento.preventDefault();

        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/autores',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            }),
            success: (novaListagem) => {
                console.log('adicionado com sucesso');
                PubSub.publish('atualiza-lista-autores', novaListagem);
                self.setState({nome: '', email: '', senha: ''});
            },
            error: (resposta) => {
                if (resposta.status === 400) {
                    new TratadorErros().publicaErros(resposta.responseJSON);
                }
            },
            beforeSend: () => {
                PubSub.publish('limpa-erros', {});
            }
        });
    }

    salvaAlteracao(nomeInput, evento){
        this.setState({[nomeInput]: evento.target.value});
    }


    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                    <InputCustomizado id="nome" type="text" name="nome" label="Nome" value={this.state.nome}
                                      onChange={this.salvaAlteracao.bind(this,'nome')}/>
                    <InputCustomizado id="email" type="email" name="email" label="Email"
                                      value={this.state.email} onChange={this.salvaAlteracao.bind(this,'email')}/>
                    <InputCustomizado id="senha" type="password" name="senha" label="Senha"
                                      value={this.state.senha} onChange={this.salvaAlteracao.bind(this,'senha')}/>
                    <BotaoSubmitCustomizado label="Gravar"/>
                </form>
            </div>
        );
    }
}

class TabelaAutores extends Component {


    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.lista.map(function (autor) {
                            return (
                                <tr key={autor.id}>
                                    <td>{autor.nome}</td>
                                    <td>{autor.email}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default class AutorBox extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    componentDidMount() {
        let self = this;

        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/autores',
            dataType: 'json',
            success: (resposta) => self.setState({lista: resposta})
        });

        PubSub.subscribe('atualiza-lista-autores', (topico, novaLista) => {
            self.setState({lista: novaLista});
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="content" id="content">
                    <FormularioAutor/>
                    <TabelaAutores lista={this.state.lista}/>
                </div>
            </React.Fragment>
        );
    }
}