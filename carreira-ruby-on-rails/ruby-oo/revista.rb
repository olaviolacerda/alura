require_relative "produto"
require_relative "impresso"
class Revista < Produto

  include Impresso

  def initialize(titulo, preco, ano_lancamento, possui_reimpressao, numero, editora)
    super(titulo, preco, ano_lancamento, editora)
    @possui_reimpressao = possui_reimpressao
    @numero = numero
  end

  def matches?(query)
    query=="revista" || query=="impresso"
  end
end
