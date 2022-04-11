class PlantsController < ApplicationController
    def index 
        plants = Plant.all 
        render json: plants
    end
    def show
        plant = find_plant
        render json: plant 
    end

    private 

    def find_plant
        Plant.find_by(id: params[:id])
    end
end
