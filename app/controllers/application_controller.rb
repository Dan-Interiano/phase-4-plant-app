class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, :current_user

  private 
  
  def current_user 
    @current_user = User.find(session[:user_id]) if session.include? :user_id
  end

  def authorize 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end


end
