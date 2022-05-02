class AdoptedsController < ApplicationController
    wrap_parameters format: []

    def create 
        @current_user.adopteds.create(adopted_params)
        render json: new_adoption, status: :created
    end
    def index 
        render json: @current_user.plants
    end

    private

    def adopted_params
        params.permit(:plant_id)
    end

end
