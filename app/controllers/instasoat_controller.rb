

class InstasoatController < ApplicationController
  layout "instasoat"

  def index



    tarifas = TarifaSoat.find_each(batch_size: 100)
    @vehiculo_props = { placa: "", tarifas: tarifas }
    @tomador_props = { nombres:"Pedro", apellidos:"Perez"}

  end
end
