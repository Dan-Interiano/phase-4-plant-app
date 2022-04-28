class AdoptedsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    def create 
        byebug
        new_adoption = Adopted.create(adopted_params)
        render json: new_adoption, status: :created
    end
    def index 
        adopted_plants = Adopted.all 
        render json: adopted_plants
    end

    private

    def adopted_params
        defaults = { user_id: session[:user_id] }
        params.permit(:plant_id).reverse_merge(defaults)
    end

end
