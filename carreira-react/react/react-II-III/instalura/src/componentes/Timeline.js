import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import FotoItem from './FotoItem';
import React, {Component} from 'react';

export default class Timeline extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fotos: []
        };
        this.login = this.props.login;
        this.like = this.like.bind(this);
        this.comenta = this.comenta.bind(this);
    }

    componentWillMount() {
        this.props.store.subscribe(fotos => this.setState({fotos}));
    }

    componentDidMount() {
        this.carregaFotos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login === undefined)
            return;
        this.login = nextProps.login;
        this.carregaFotos();
    }

    like(fotoId) {
        this.props.store.like(fotoId);
    }

    comenta(fotoId, textoComentario) {
        this.props.store.comenta(fotoId, textoComentario);
    }

    carregaFotos() {
        let urlPerfil;

        if (this.login === undefined) {
            urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        } else {
            urlPerfil = `https://instalura-api.herokuapp.com/api/public/fotos/${this.login}`
        }

        this.props.store.lista(urlPerfil);

    }

    render() {
        return (
            <div className="fotos container">
                <CSSTransitionGroup
                    transitionName="timeline"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.fotos.map(foto => <FotoItem key={foto} foto={foto} like={this.like}
                                                            comenta={this.comenta}/>)}
                </CSSTransitionGroup>
            </div>
        );
    }
}