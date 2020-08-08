class DepartamentosController < ApplicationController
  before_action :set_departamento, only: [:show, :edit, :update, :destroy]

  # GET /departamentos
  def index
    @departamentos = Departamento.all
  end

  # GET /departamentos/1
  def show
  end

  # GET /departamentos/new
  def new
    @departamento = Departamento.new
  end

  # GET /departamentos/1/edit
  def edit
  end

  # POST /departamentos
  def create
    @departamento = Departamento.new(departamento_params)

    if @departamento.save
      redirect_to @departamento, notice: 'Departamento was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /departamentos/1
  def update
    if @departamento.update(departamento_params)
      redirect_to @departamento, notice: 'Departamento was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /departamentos/1
  def destroy
    @departamento.destroy
    redirect_to departamentos_url, notice: 'Departamento was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_departamento
      @departamento = Departamento.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def departamento_params
      params.require(:departamento).permit(:nome)
    end
end
