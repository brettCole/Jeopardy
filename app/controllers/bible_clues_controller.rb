class BibleCluesController < ApplicationController

  def create
    bible_clue = BibleClue.new(bible_clue_params)
    if bible_clue.valid? && bible_clue.save
  end

  private

  def bible_clue_params
    params.require(:bible_clues).permit(:description, :bible_category_id)
  end

end
