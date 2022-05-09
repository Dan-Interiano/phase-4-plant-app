class ReviewsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        all_reviews = Review.all 
        render json: all_reviews
    end
    def show
        selected_review = find_review
        render json: selected_review
    end 
    def create 
        new_review = @current_user.reviews.create!(review_params)
        render json: new_review, status: :created
    end
    def destroy
        review = find_review
        if @current_user.id == review.user_id 
            review.destroy
            head :no_content
        else 
            return render json: { error: "Not authorized" }, status: :unauthorized 
        end
    end
    def update
        review = find_review
        if @current_user.id == review.user_id 
            review.update!(review_params)
            render json: review, include: :user, status: :accepted 
        else 
            return render json: { error: "Not authorized" }, status: :unauthorized 
        end
    end 

    private

    def find_review
        Review.find_by(id: params[:id])
    end
    def review_params
        params.permit(:title, :comment, :score, :plant_id, :user_id)
    end
    def render_not_found_response
        render json: { error: "Plant not found" }, status: :not_found
    end
end
