class Api::V1::Products::ProductsController < ApplicationController
  def index
    render json: Product.all
  end
end
