class BibleClue < ApplicationRecord
  belongs_to :bible_category

  validates :description, :bible_category_id, presence: true

end
