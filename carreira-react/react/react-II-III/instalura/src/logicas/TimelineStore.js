import PubSub from "pubsub-js";

export default class TimelineStore {

    constructor(fotos) {
        this.fotos = fotos;
    }

    lista(urlPerfil) {
        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.fotos = fotos;
                PubSub.publish('timeline', this.fotos);
            });
    }

    like(fotoId) {

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, {
            method: 'POST'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('não foi possível curtir essa foto')
                }
            })
            .then(liker => {
                const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
                const possivelLiker = fotoAchada.likers.find(likerAtual => likerAtual.login === liker.login);
                fotoAchada.likeada = !fotoAchada.likeada;

                if (possivelLiker === undefined) {
                    fotoAchada.likers.push(liker);
                } else {
                    const novosLikers = fotoAchada.likers.filter(likerAtual => likerAtual.login !== liker.login);
                    fotoAchada.likers = novosLikers;
                }
                PubSub.publish('timeline', this.fotos);
            });

    }

    comenta(fotoId, textoComentario) {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                texto: textoComentario
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("não foi possível comentar nessa foto")
                }
            })
            .then(novoComentario => {
                const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
                fotoAchada.comentarios.push(novoComentario);
                PubSub.publish('timeline', this.fotos);
            });

    }

    subscribe(callback) {
        PubSub.subscribe('timeline', (topico, fotos) => {
            callback(fotos);
        });
    }
}