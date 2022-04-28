class CreateAdopteds < ActiveRecord::Migration[6.1]
  def change
    create_table :adopteds do |t|
      t.integer :plant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
