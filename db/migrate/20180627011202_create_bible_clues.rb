class CreateBibleClues < ActiveRecord::Migration[5.2]
  def change
    create_table :bible_clues do |t|
      t.string :description
      t.belongs_to :bible_category, index: true

      t.timestamps
    end
  end
end
