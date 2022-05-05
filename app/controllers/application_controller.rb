class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, :current_user
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private 
  
  def current_user 
    @current_user = User.find(session[:user_id]) if session.include? :user_id
  end

  def authorize 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

end
