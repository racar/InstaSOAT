class CreateVehiculos < ActiveRecord::Migration[5.1]
  def change
    create_table :vehiculos do |t|
      t.string :placa
      t.integer :tarifa_soat_id
      t.integer :num_pasajeros

      t.timestamps
    end
  end
end
