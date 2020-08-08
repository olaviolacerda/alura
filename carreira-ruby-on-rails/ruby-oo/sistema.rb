require_relative "livro"
require_relative "contador"
require_relative "estoque"
require_relative "conversor"
require_relative "revista"
require_relative "ebook"

# def livro_para_newsletter(livro)
#   if livro.ano_lancamento < 1999
#     puts "Newsletter de Liquidação:"
#     puts livro.titulo
#     puts livro.preco
#     puts livro.possui_reimpressao?
#   end
# end
algoritmos = Livro.new("Algoritmos", 100.0, 1998, true, true,"")
arquitetura = Livro.new("Arquitetura", 70.0, 2011, true, true,"")
pragmatic = Livro.new("Pragmatic", 100.0, 1999, true, true,"")
ruby = Livro.new("Ruby", 100.0, 2004, true, true,"")
rubys = Livro.new("Ruby", 100.0, 2004, true, true,"")
revistona = Revista.new("Revista de Ruby", 10, 2007, true,3, "Revista")
online_arquitetura = EBook.new("Introdução a Arquitetura", 50, 2012, "")
estoque = Estoque.new
estoque << algoritmos << algoritmos << ruby << pragmatic << arquitetura << ruby << ruby << revistona << revistona << online_arquitetura

estoque.vende ruby
estoque.vende algoritmos
estoque.vende algoritmos
estoque.vende ruby
estoque.vende ruby
estoque.vende revistona
estoque.vende online_arquitetura
puts estoque.livro_que_mais_vendeu_por_titulo.titulo
puts estoque.revista_que_mais_vendeu_por_titulo.titulo
puts estoque.ebook_que_mais_vendeu_por_titulo.titulo
puts estoque.respond_to?(:ebook_que_mais_vendeu_por_titulo)
# convertido = Conversor.new
# convertido.string_para_alfanumerico ruby.titulo
# novo_nome = convertido.novo
# ruby.renomeia novo_nome

# estoque.livros.each_with_index do |livro,i|
#   preco_formatado = convertido.formata_preco livro.preco.to_s
#   puts livro.titulo
#   puts "R$#{preco_formatado}"
# end
