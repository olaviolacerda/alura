import React, {Component} from 'react';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import BotaoSubmitCustomizado from "./componentes/BotaoSubmitCustomizado";
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

class FormularioLivro extends Component {

    constructor() {
        super();
        this.state = {
            titulo: '',
            preco: '',
            autorId: '',
        };
        this.enviaForm = this.enviaForm.bind(this);
        this.setTitulo = this.setTitulo.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setAutorId = this.setAutorId.bind(this);
    }

    enviaForm(evento) {
        let self = this;
        evento.preventDefault();

        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/livros',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({
                titulo: this.state.titulo,
                preco: this.state.preco,
                autorId: this.state.autorId
            }),
            success: (novaListagem) => {
                console.log('adicionado com sucesso');
                PubSub.publish('atualiza-lista-livros', novaListagem);
                self.setState({titulo: '', preco: '', autorId: ''});
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

    setTitulo(evento) {
        evento.preventDefault();
        this.setState({titulo: evento.target.value})
    }

    setPreco(evento) {
        evento.preventDefault();
        this.setState({preco: evento.target.value})
    }

    setAutorId(evento) {
        evento.preventDefault();
        this.setState({autorId: evento.target.value})
    }


    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                    <InputCustomizado id="titulo" type="text" name="titulo" label="Titulo" value={this.state.titulo}
                                      onChange={this.setTitulo}/>
                    <InputCustomizado id="preco" type="number" name="preco" label="Preço"
                                      value={this.state.preco} onChange={this.setPreco}/>
                    <div className="pure-control-group">
                        <label htmlFor="autorId">Autor</label>
                        <select name="autorId" id="autorID" value= {this.state.autorId} onChange={this.setAutorId}>
                            <option value="">Selecione autor</option>
                            {
                                this.props.autores.map(function(autor){
                                    return <option value={autor.id}>{autor.nome}</option>
                                })
                            }
                        </select>
                    </div>
                    <BotaoSubmitCustomizado label="Gravar"/>
                </form>
            </div>
        );
    }
}

class TabelaLivros extends Component {


    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Autor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.lista.map(function (livro) {
                            return (
                                <tr key={livro.id}>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.preco}</td>
                                    <td>{livro.autor.nome}</td>
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

export default class LivroBox extends Component {

    constructor() {
        super();
        this.state = {
            lista: [], autores: []
        };
    }

    componentDidMount() {
        let self = this;

        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/livros',
            dataType: 'json',
            success: (resposta) => self.setState({lista: resposta})
        });

        PubSub.subscribe('atualiza-lista-livros', (topico, novaLista) => {
            self.setState({lista: novaLista});
        });

        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/autores',
            dataType: 'json',
            success: (resposta) => self.setState({autores: resposta})
        });

        PubSub.subscribe('atualiza-lista-autores', (topico, novaLista) => {
            self.setState({autores: novaLista});
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1>Cadastro de Livros</h1>
                </div>
                <div className="content" id="content">
                    <FormularioLivro autores = {this.state.autores}/>
                    <TabelaLivros lista={this.state.lista}/>
                </div>
            </React.Fragment>
        );
    }
}