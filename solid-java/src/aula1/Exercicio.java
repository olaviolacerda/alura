/*
 * Refatore o código abaixo, que é o mesmo código do vídeo. Você não precisa
 * necessariamente fazer idêntico ao feito pelo instrutor. Mas lembre-se de
 * resolver o problema de coesão existente no código abaixo:
 * 
 * public class CalculadoraDeSalario {
 * 
 * 
 * public double calcula(Funcionario funcionario) {
 * if(DESENVOLVEDOR.equals(funcionario.getCargo())) { return
 * dezOuVintePorcento(funcionario); }
 * 
 * if(DBA.equals(funcionario.getCargo()) ||
 * TESTER.equals(funcionario.getCargo())) { return
 * quinzeOuVinteCincoPorcento(funcionario); }
 * 
 * throw new RuntimeException("funcionario invalido"); }
 * 
 * private double dezOuVintePorcento(Funcionario funcionario) {
 * if(funcionario.getSalarioBase() > 3000.0) { return
 * funcionario.getSalarioBase() * 0.8; } else { return
 * funcionario.getSalarioBase() * 0.9; } }
 * 
 * private double quinzeOuVinteCincoPorcento(Funcionario funcionario) {
 * if(funcionario.getSalarioBase() > 2000.0) { return
 * funcionario.getSalarioBase() * 0.75; } else { return
 * funcionario.getSalarioBase() * 0.85; } }
 * 
 * }
 * 
 * public enum Cargo { DESENVOLVEDOR, DBA, TESTER }
 * 
 * public class Funcionario {
 * 
 * private int id; private String nome; private Cargo cargo; private Calendar
 * dataDeAdmissao; private double salarioBase; public int getId() { return id; }
 * public String getNome() { return nome; } public Cargo getCargo() { return
 * cargo; } public Calendar getDataDeAdmissao() { return dataDeAdmissao; }
 * public double getSalarioBase() { return salarioBase; } public void setId(int
 * id) { this.id = id; } public void setNome(String nome) { this.nome = nome; }
 * public void setCargo(Cargo cargo) { this.cargo = cargo; } public void
 * setDataDeAdmissao(Calendar dataDeAdmissao) { this.dataDeAdmissao =
 * dataDeAdmissao; } public void setSalarioBase(double salarioBase) {
 * this.salarioBase = salarioBase; }
 * 
 * }
 * 
 */