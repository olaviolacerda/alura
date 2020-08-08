require_relative "produto"
require_relative "impresso"
class Livro < Produto
  include Impresso

  def initialize(titulo, preco, ano_lancamento, possui_reimpressao, possui_sobrecapa, editora)
    super(titulo, preco, ano_lancamento, editora)
    @possui_reimpressao = possui_reimpressao
    @possui_sobrecapa = possui_sobrecapa
  end

  def matches?(query)
    query=="livro" || query=="impresso"
  end

end
