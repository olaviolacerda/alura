const criaJogo = sprite => {
  let palavraSecreta = "",
    etapa = 1,
    lacunas = [];

  const proximaEtapa = () => (etapa = 2);

  const setPalavraSecreta = palavra => {
    if (!palavra.trim()) throw Error("Palavra secreta inválida");
    palavraSecreta = palavra;
    criaLacunas();
    proximaEtapa();
  };

  const processaChute = chute => {
    if (!chute.trim()) throw Error("Chute inválido");

    const exp = new RegExp(chute, "gi");
    let resultado,
      acertou = false;

    while ((resultado = exp.exec(palavraSecreta))) {
      lacunas[resultado.index] = chute;
      acertou = true;
    }

    if (!acertou) sprite.nextFrame();
  };

  const criaLacunas = () => (lacunas = Array(palavraSecreta.length).fill(""));

  const getLacunas = () => lacunas;

  const getEtapa = () => etapa;

  const ganhou = () =>
    lacunas.length
      ? !lacunas.some(function(lacuna) {
          return lacuna === "";
        })
      : false;

  const perdeu = () => sprite.isFinished();

  const reinicia = () => {
    palavraSecreta = "";
    etapa = 1;
    lacunas = [];
    sprite.reset();
  };

  const ganhouOuPerdeu = () => ganhou() || perdeu();

  return {
    setPalavraSecreta,
    getLacunas,
    getEtapa,
    processaChute,
    ganhou,
    perdeu,
    ganhouOuPerdeu,
    reinicia
  };
};
