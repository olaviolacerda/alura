/*
 * Resolva o problema de acoplamento do código abaixo. Se tiver alguma outra boa
 * ideia, você não precisa fazer igual ao instrutor.
 * 
 * public class GeradorDeNotaFiscal {
 * 
 * private final EnviadorDeEmail email; private final NotaFiscalDao dao;
 * 
 * public GeradorDeNotaFiscal(EnviadorDeEmail email, NotaFiscalDao dao) {
 * this.email = email; this.dao = dao; }
 * 
 * public NotaFiscal gera(Fatura fatura) {
 * 
 * double valor = fatura.getValorMensal();
 * 
 * NotaFiscal nf = new NotaFiscal(valor, impostoSimplesSobreO(valor));
 * 
 * email.enviaEmail(nf); dao.persiste(nf);
 * 
 * return nf; }
 * 
 * private double impostoSimplesSobreO(double valor) { return valor * 0.06; } }
 * public class EnviadorDeEmail {
 * 
 * public void enviaEmail(NotaFiscal nf) {
 * System.out.println("envia email da nf " + nf.getId()); } } public class
 * NotaFiscalDao {
 * 
 * public void persiste(NotaFiscal nf) {
 * System.out.println("salva nf no banco"); } } public class Fatura {
 * 
 * private double valorMensal; private String cliente;
 * 
 * public Fatura() {}
 * 
 * public Fatura(double valorMensal, String cliente) { this.valorMensal =
 * valorMensal; this.cliente = cliente; } public double getValorMensal() {
 * return valorMensal; } public void setValorMensal(double valorMensal) {
 * this.valorMensal = valorMensal; } public String getCliente() { return
 * cliente; } public void setCliente(String cliente) { this.cliente = cliente; }
 * 
 * 
 * } public class NotaFiscal {
 * 
 * private int id; private double valorBruto; private double impostos;
 * 
 * public NotaFiscal(int id, double valorBruto, double impostos) { this.id = id;
 * this.valorBruto = valorBruto; this.impostos = impostos; }
 * 
 * public NotaFiscal(double valorBruto, double impostos) { this(0, valorBruto,
 * impostos); }
 * 
 * public int getId() { return id; } public void setId(int id) { this.id = id; }
 * public double getValorBruto() { return valorBruto; } public void
 * setValorBruto(double valorBruto) { this.valorBruto = valorBruto; } public
 * double getImpostos() { return impostos; } public void setImpostos(double
 * impostos) { this.impostos = impostos; }
 * 
 * public double getValorLiquido() { return this.valorBruto - this.impostos; }
 * 
 * }
 * 
 */