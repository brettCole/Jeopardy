class Api::V1::CategoryController < ApplicationController

  def index
    category_one = JAPI::Trebek.category(rand 1000)
    category_two = JAPI::Trebek.category(rand 1000)
    category_three = JAPI::Trebek.category(rand 1000)
    category_four = JAPI::Trebek.category(rand 1000)
    category_five = JAPI::Trebek.category(rand 1000)
    category_six = JAPI::Trebek.category(rand 1000)
    
    render json: {
      :category_one => category_one,
      :category_two => category_two,
      :category_three => category_three,
      :category_four => category_four,
      :category_five => category_five,
      :category_six => category_six
    }
  end

end