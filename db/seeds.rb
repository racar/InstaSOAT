# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TarifaSOAT.delete_all
File.open("#{Rails.root}/db/tarifassoat2017.txt") do |tarifas|
  tarifas.read.each_line do |tarifa|
    tipo, clasif1, clasif2, valor = tarifa.chomp.split("|")
    TarifaSOAT.create!(:tipo => tipo, :clasif1 => clasif1, :clasif2 => clasif2, :valor => valor)
  end
end
