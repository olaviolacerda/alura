package aula2;

import java.util.List;

public class GeradorDeNotaFiscal {
	private List<Acao> acoes;

	public GeradorDeNotaFiscal(List<Acao> acoes) {
		this.acoes = acoes;
	}

	public NotaFiscal gera(Fatura fatura) {

		double valor = fatura.getValorMensal();

		NotaFiscal nf = new NotaFiscal(valor, impostoSimplesSobreO(valor));

		for (Acao acao : acoes) {
			acao.executa(nf);
		}

		return nf;
	}

	private double impostoSimplesSobreO(double valor) {
		return valor * 0.06;
	}
}