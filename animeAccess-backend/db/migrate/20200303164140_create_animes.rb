class CreateAnimes < ActiveRecord::Migration[6.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :image_url
      t.float :rating
      t.string :description
      t.integer :like
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
