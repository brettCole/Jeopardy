class BibleCategoriesController < ApplicationController

  def index

  end

  def create
    bible_category = BibleCategories.new(bible_category_params)
    if bible_category.valid? && bible_category.save
  end

  private

  def bible_category_params
    params.require(:bible_categories).permit(:title)
  end
  
end
