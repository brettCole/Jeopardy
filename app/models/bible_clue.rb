class BibleClue < ApplicationRecord
  belongs_to :bible_category

  validates :description, :bible_category_id, :point_value, :answer, presence: true

end
