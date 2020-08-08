class ArquivoController {

  constructor() {
    this._inputDados = document.querySelector('.dados-arquivo');
  }

  envia() {
    //cria um Arquivo com as suas propriedades;
    let dados = this._inputDados.value.split('/').map(item => item.toUpperCase());
    let arquivo = new Arquivo(...dados); // usando spread operator
    console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
    this._limpaFormulario();
    // exibe mensagem no console com os dados do arquivo.
  }

  _limpaFormulario() {
    this._inputDados.value = '';
    this._inputDados.focus();
  }
}
