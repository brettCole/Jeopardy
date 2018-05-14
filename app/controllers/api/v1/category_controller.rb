class Api::V1::CategoryController < ApplicationController

  def index
    random_starting_point = rand(1..100)
    category_clues = JAPI::Trebek
    binding.pry
    render json: category_clues.categories(:count => 6, :offset => random_starting_point), status: 200
  end

end