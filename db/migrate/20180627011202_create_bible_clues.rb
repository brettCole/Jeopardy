class CreateBibleClues < ActiveRecord::Migration[5.2]
  def change
    create_table :bible_clues do |t|
      t.string :description
      t.string :answer
      t.integer :point_value
      t.belongs_to :bible_category, index: true

      t.timestamps
    end
  end
end
