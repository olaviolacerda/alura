const criaController = jogo => {
  const $entrada = $(".entrada");
  const $lacunas = $(".lacunas");

  const exibeLacunas = () => {
    $lacunas.empty();
    jogo.getLacunas().forEach(function(lacuna) {
      $("<li>")
        .addClass("lacuna")
        .text(lacuna)
        .appendTo($lacunas);
    });
  };

  const mudaPlaceHolder = texto => $entrada.attr("placeholder", texto);

  const reinicia = () => {
    jogo.reinicia();
    $lacunas.empty();
    mudaPlaceHolder("palavra secreta");
  };

  const guardaPalavraSecreta = () => {
    try {
      jogo.setPalavraSecreta($entrada.val().trim());
      $entrada.val("");
      mudaPlaceHolder("chute");
      exibeLacunas();
    } catch (err) {
      alert(err.message);
    }
  };

  const leChute = () => {
    try {
      jogo.processaChute(
        $entrada
          .val()
          .trim()
          .substr(0, 1)
      );
      $entrada.val("");
      exibeLacunas();
      setTimeout(function() {
        if (jogo.ganhouOuPerdeu()) {
          if (jogo.ganhou()) {
            alert("ganhou");
          } else if (jogo.perdeu()) {
            alert("errou");
          }
          reinicia();
        }
      }, 200);
    } catch (err) {
      alert(err.message);
    }
  };

  // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
  const inicia = () => {
    $entrada.keypress(function(event) {
      if (event.which == 13) {
        switch (jogo.getEtapa()) {
          case 1:
            guardaPalavraSecreta();
            break;
          case 2:
            leChute();
            break;
        }
      }
    });
  };

  // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado.
  return { inicia };
};
