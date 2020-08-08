import {Negociacao} from "../models/Negociacao";

export class NegociacaoDao {
    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);


            request.onsuccess = ev => {
                resolve();
            };

            request.onerror = ev => {
                console.log(ev.target.error);
                reject('Não foi possivel adicionar a negociação');
            };

        });
    }

    listaTodos() {
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];

            cursor.onsuccess = ev => {

                let atual = ev.target.result;

                if (atual) {
                    let dado = atual.value;

                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));

                    atual.continue();
                } else {
                    resolve(negociacoes);
                }

            }

            cursor.onerror = ev => {
                reject('Não foi possível listar as negociações');
                console.log(ev.target.error.name);
            }
        })
    }

    apagaTodos(){

        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = ev => resolve('Negociações removidas com sucesso');

            request.onerror = ev => reject('Não foi possível remover as negociações');
        })

    }
}