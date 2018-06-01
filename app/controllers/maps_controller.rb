class MapsController < ApplicationController

  def randomize
    @client = GooglePlaces::Client.new("AIzaSyCVcuPwW5vDnPwhBMVvf322lmGcZwqtCeY")
    spots = @client.spots(40.191327, -8.4136871, radius: 1000, types: 'restaurant')
    @randomSpot = spots[rand(spots.length)]
    gon.randomSpot = spots[rand(spots.length)]
    if @randomSpot
      respond_to do |format|
        format.js { render partial: "maps/map" }
      end
    else
      flash[:danger] = "no restaurants in your zone"
      redirect_to randomize_path
    end
  end

end
