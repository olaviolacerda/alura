#conversor
class Conversor
  attr_accessor :novo

  def string_para_alfanumerico(titulo)
    @novo = titulo.gsub /[^\w\s]/,''
  end

  def formata_preco(preco)
    @novo = preco.gsub ".0", ",00"
  end
end
