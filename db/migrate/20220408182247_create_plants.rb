class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :species
      t.string :sun_exposure
      t.string :soil_type
      t.string :water_cycle
      t.string :bio

      t.timestamps
    end
  end
end
