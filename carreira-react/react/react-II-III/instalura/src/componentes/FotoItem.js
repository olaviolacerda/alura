import React, { Component } from 'react';
import { Link } from 'react-router';

class FotoAtualizacoes extends Component {


    constructor(props) {
        super(props);
    }

    like(evento) {
        evento.preventDefault();
        this.props.like(this.props.foto.id);
    }

    comenta(evento) {
        evento.preventDefault();
        this.props.comenta(this.props.foto.id, this.comentario.value);
        this.refs.form.reset(); //limpar formulário após envio
    }

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a onClick={this.like.bind(this)}
                    className={this.props.foto.likeada ? "fotoAtualizacoes-like-ativo" : "fotoAtualizacoes-like"}>Likar</a>
                <form className="fotoAtualizacoes-form" onSubmit={this.comenta.bind(this)} ref='form'>
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"
                        ref={input => this.comentario = input} />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>

            </section>
        );
    }
}

class FotoInfo extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let likers = [];
        let control = 0;
        if (this.props.foto.likers.length === 0) {
            control = 1;
            likers = "0 curtidas";
        } else {
            likers = this.props.foto.likers.map(liker => {
                return (
                    <Link to={`/timeline/${liker.login}`} key={liker}>{liker.login} </Link>
                )
            })
        }

        return (
            <div className="foto-in fo">
                <div className="foto-info-likes">
                    {likers}{control === 1 ? "" : "curtiram."}
                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
                </p>

                <ul className="foto-info-comentarios">
                    {this.props.foto.comentarios.map(comentario => {
                        return (<li className="comentario" key={comentario}>
                            <Link to={`/timeline/${comentario.login}`}
                                className="foto-info-autor">{comentario.login} </Link>
                            {comentario.texto}
                        </li>);
                    })}

                </ul>
            </div>
        );
    }
}

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img
                        src={this.props.foto.urlPerfil}
                        alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <Link to={`/timeline/${this.props.foto.loginUsuario}`}>
                            {this.props.foto.loginUsuario}
                        </Link>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

export default class FotoItem extends Component {
    render() {
        return (
            <div className="foto">
                <FotoHeader foto={this.props.foto} />
                <img alt="foto" className="foto-src"
                    src={this.props.foto.urlFoto} />
                <FotoInfo foto={this.props.foto} />
                <FotoAtualizacoes {...this.props} />
            </div>
        );
    }
}