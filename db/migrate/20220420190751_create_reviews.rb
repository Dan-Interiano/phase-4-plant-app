class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :comment
      t.integer :score
      t.integer :user_id
      t.integer :plant_id

      t.timestamps
    end
  end
end
