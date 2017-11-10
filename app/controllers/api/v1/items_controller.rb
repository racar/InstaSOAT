class Api::V1::ItemsController < Api::V1::BaseController
  def index
    respond_with TarifaSoat.all
  end
  def create
    respond_with :api, :v1, TarifaSoat.create(item_params)
  end
  def destroy
    respond_with TarifaSoat.destroy(params[:id])
  end
  def update
    item = TarifaSoat.find(params["id"])
    item.update_attributes(item_params)
    respond_with item, json: item
  end
  private
  def item_params
    params.require(:item).permit(:id, :name, :description)
  end
end
