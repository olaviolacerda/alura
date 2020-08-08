class Produto < ApplicationRecord

  belongs_to :departamento #relaciona as tabelas do banco

  validates :quantidade, presence: true
  validates :nome, length: {minimum: 5}
end
