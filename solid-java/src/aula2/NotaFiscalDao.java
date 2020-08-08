package aula2;

public class NotaFiscalDao implements Acao {

	@Override
	public void executa(NotaFiscal nf) {
		System.out.println("salva nf no banco");
	}
}