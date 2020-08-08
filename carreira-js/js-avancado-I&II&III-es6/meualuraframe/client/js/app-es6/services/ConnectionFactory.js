const stores = ['negociacoes'];
const dbName = 'aluraframe';
const version = 7;
let connection = null;
let close = null;

export class ConnectionFactory {
    constructor() {
        throw new Error('Não é possivel criar instâncias de ConnectionFactory');
    }


    static getConnection() {
        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = ev => {
                ConnectionFactory._createStores(ev.target.result);
            };

            openRequest.onsuccess = ev => {

                if (!connection) {
                    connection = ev.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function () {
                        throw new Error('Você não pode fechar diretamente a conexão');
                    };
                }

                resolve(connection);

            };

            openRequest.onerror = ev => {

                console.log(ev.target.error);

                reject(ev.target.error.name);

            }
        });
    }

    static _createStores(connection) {
        stores.forEach(store => {
            if (connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }
            connection.createObjectStore(store, {autoIncrement: true});
        })
    }

    static closeConnection() {
        if (connection) {
            close();
            connection = null;
        }
    }

}
