Rails.application.routes.draw do
  resources :departamentos
  # [ação HTTP] "[o nome que queremos para a URL]" => "[nome do Controller]#[nome da página]"
  # post "/produtos" => "produtos#create"
  # get "/produtos/new" => "produtos#new"
  # delete "/produtos/:id" => "produtos#destroy", as: :produto
  resources :produtos, only: [:new, :create, :destroy, :edit, :update]
  get "/produtos/busca" => "produtos#busca", as: :busca_produto
  root "produtos#index" #index já vem aqui
end
