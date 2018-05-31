class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  before_action :authenticate_user!
  @client = GooglePlaces::Client.new("AIzaSyCVcuPwW5vDnPwhBMVvf322lmGcZwqtCeY")
end
