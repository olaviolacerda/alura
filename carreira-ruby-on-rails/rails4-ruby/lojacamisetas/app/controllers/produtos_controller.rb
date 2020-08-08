class ProdutosController < ApplicationController
  #assume que antes das ações, ele seta o produto para usar
  before_action :set_produto, only: [:edit, :update, :destroy]

  def index
    @produtos_por_nome = Produto.order ("lower(#{:nome})")
    @produtos_por_preco = Produto.order(:preco).limit 2
  end
  # se usa @ para poder ser acessado de fora
  # se usa :nome para não ser criada uma string, utilizando "nome"
  #ProdutoController
  def new
    @produto = Produto.new
    renderiza_new
  end

  def create
    #busca todos os params do form e permite os selecionados
    @produto = Produto.new produto_params
    if @produto.save
      flash[:notice] = "Produto salvo com sucesso"
      redirect_to root_url #outra requisição web, perde os dados da atual
    else
      renderiza_new #nome da página, renderiza somente, para não perder conteudo
    end
  end

  def edit
    renderiza_edit
  end

  def update
    if @produto.update produto_params
      flash[:notice] = "Produto alterado com sucesso"
      redirect_to root_url
    else
      renderiza_new
    end
  end

  def busca
    @nome_a_buscar = params[:nome]
    @produtos = Produto.where "nome like ?", "%#{@nome_a_buscar}%" #se não botar @ ele manda pra view e não pro response
  end

  def destroy
    @produto.destroy
    redirect_to root_url
  end

  private #métodos que só o controller utiliza ↓↓↓↓

  def renderiza_new
    @departamentos = Departamento.all
    render :new
  end

  def renderiza_edit
    @departamentos = Departamento.all
    render :edit
  end

  def set_produto
    id = params[:id]
    @produto = Produto.find(id)
  end

  def produto_params
    params.require(:produto).permit :nome, :preco, :descricao, :quantidade, :departamento_id
  end
end
