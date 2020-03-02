class CreateAnimes < ActiveRecord::Migration[6.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :image
      t.string :description
      t.integer :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.string :genre

      t.timestamps
    end
  end
end
