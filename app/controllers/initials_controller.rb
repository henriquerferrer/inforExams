class InitialsController < ApplicationController
  def home
    gon.lat = request.location.latitude
    gon.lng = request.location.logitude
  end
end
