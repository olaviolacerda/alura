class AddDepartamentoIdToProduto < ActiveRecord::Migration[5.0]
  def change
    add_column :produtos, :departamento_id, :integer
  end
end
