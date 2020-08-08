package aula2;

public class EnviadorDeEmail implements Acao {

	@Override
	public void executa(NotaFiscal nf) {
		System.out.println("envia email da nf " + nf.getId());
	}
}