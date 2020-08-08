class Departamento < ApplicationRecord
  validates :nome, length: {minimum: 5}
end
