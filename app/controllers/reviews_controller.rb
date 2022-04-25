class ReviewsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:index, :show, :create, :destroy]

    def index 
        all_reviews = Review.all 
        render json: all_reviews
    end
    def show
        byebug
        selected_review = find_review
        render json: selected_review
    end 
    def create 
        new_review = Review.create(review_params)
        byebug
        render json: new_review, status: :created
    end
    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find_by(id: params[:id])
    end
    def review_params
        defaults = { user_id: session[:user_id] }
        params.permit(:title, :comment, :score, :plant_id, :user_id).reverse_merge(defaults)
    end
end
