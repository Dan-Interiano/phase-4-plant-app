class PlantsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create, :index, :show]

    def index 
        plants = Plant.all 
        render json: plants
    end
    def show
        plant = find_plant
        render json: plant 
    end
    def create 
        flora = Plant.create(plant_params)
        render json: flora, status: :created
    end

    private 

    def find_plant
        Plant.find_by(id: params[:id])
    end
    def plant_params
        params.permit(:name, :species, :sun_exposure, :soil_type, :water_cycle, :image_url, :bio)
    end
end
