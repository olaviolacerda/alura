package aula5;

public class ContaComum {

	protected double saldo;
	private ManipuladorDeSaldo manipulador;

	public ContaComum() {
		manipulador = new ManipuladorDeSaldo();
	}

	public void deposita(double valor) {
		manipulador.deposita(valor);
	}

	public void saca(double valor) {
		manipulador.saca(valor);
	}

	public void rende() {
		manipulador.rende(0.01);
	}

	public double getSaldo() {
		return manipulador.getSaldo();
	}
}
