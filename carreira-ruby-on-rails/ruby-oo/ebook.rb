require_relative "produto"
class EBook < Produto
  # construtor igual a classe produto, desnecessário

  def matches?(query)
    ["ebook", "digital"].include?(query)
  end

end
