class CreateTarifaSoats < ActiveRecord::Migration[5.1]
  def change
    create_table :tarifa_soats do |t|
      t.string :tipo
      t.string :clasif1
      t.string :clasif2
      t.string :valor

      t.timestamps
    end
  end
end
