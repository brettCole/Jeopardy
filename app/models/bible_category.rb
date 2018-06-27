class BibleCategory < ApplicationRecord
  has_many :bible_clues, dependent: :destroy

  validates :title, presence: true
  validates :title, uniqueness: true
end
