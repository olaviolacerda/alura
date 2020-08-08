class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(function () {
            console.log(++this._segundos);
          }, 1000);
    }
}
var relogio = new Relogio();
//Estava com erro, o setInterval pegava um this global, do window e não da classe Relogio
class Relogio {

    constructor() {
        this._segundos = 0;
        setInterval(() => console.log(++this._segundos), 1000); // usando arrow function. O this é o this de `Relogio`, e não `window`.
    }
}

var relogio = new Relogio();
