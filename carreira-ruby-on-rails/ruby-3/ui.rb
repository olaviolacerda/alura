def da_boas_vindas
  puts "Bem-vindo ao Foge-foge"
  puts "Qual seu nome?"
  nome = gets.strip
  puts "Começaremos o jogo para você #{nome}."
end

def desenha(mapa)
  puts mapa
end

def pede_movimento
  puts "Para onde deseja ir?"
  movimento = gets.strip
end

def game_over
  puts "\n\n\n"
  puts "Game over"
end
