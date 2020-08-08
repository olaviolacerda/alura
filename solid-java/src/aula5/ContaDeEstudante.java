package aula5;

public class ContaDeEstudante {
	private int milhas;
	private ManipuladorDeSaldo manipulador;

	public ContaDeEstudante() {
		manipulador = new ManipuladorDeSaldo();
	}

	public void deposita(double valor) {
		manipulador.deposita(valor);
		this.milhas += (int) valor;
	}

	public int getMilhas() {
		return milhas;
	}
	
	public double getSaldo() {
		return manipulador.getSaldo();
	}
}
