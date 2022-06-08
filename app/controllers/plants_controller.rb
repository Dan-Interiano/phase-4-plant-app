class PlantsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        #if not params return all 
        if(!params[:species])
            plants = Plant.all 
            render json: plants
        #else if params return species 
        else 
            #species and add it to the where query method
            #specific_plant = Plant.where(species: params[:species])
            specific_plant = Plant.species(params[:species])
            render json: specific_plant
        end

    end
    def show
        plant = find_plant
        render json: plant 
    end
    def create 
        flora = Plant.create!(plant_params)
        render json: flora, status: :created
    end

    private 

    def find_plant
        Plant.find_by(id: params[:id])
    end
    def plant_params
        params.permit(:name, :species, :sun_exposure, :soil_type, :water_cycle, :image_url, :bio)
    end
    def render_not_found_response
        render json: { error: "Plant not found" }, status: :not_found
    end
end
