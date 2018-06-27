class BibleCategory < ApplicationRecord
  has_many :clues, dependent: :destroy

  validates :title, presence: true
  validates :title, uniqueness: true
end
