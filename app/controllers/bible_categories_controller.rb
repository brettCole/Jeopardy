class BibleCategoriesController < ApplicationController

  def index
    categories = BibleCategory.all
    render json: categories, include: [:bible_clues], status: 200
  end

  def create
    bible_category = BibleCategory.new(bible_category_params)
    if bible_category.valid? && bible_category.save 
      render status: 200
    end
  end

  private

  def bible_category_params
    params.require(:bible_categories).permit(:title)
  end
  
end
