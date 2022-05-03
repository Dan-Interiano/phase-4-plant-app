class ReviewsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:index, :show, :create, :destroy, :update]

    def index 
        all_reviews = Review.all 
        render json: all_reviews
    end
    def show
        selected_review = find_review
        render json: selected_review
    end 
    def create 
        new_review = @current_user.reviews.create(review_params)
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
            review.update(review_params)
            render json: review, status: :accepted 
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
end
