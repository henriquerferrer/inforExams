class MapsController < ApplicationController

  def randomize
    @client = GooglePlaces::Client.new("AIzaSyCVcuPwW5vDnPwhBMVvf322lmGcZwqtCeY")
    puts params[:types]
    spots = @client.spots(params[:latitude], params[:longitude], radius: params[:meters], types: params[:types])
    #spots = @client.spots(40.202738, -8.401090, radius: 1000, types: 'restaurant') #remove this line for deployment
    @randomSpot = spots[rand(spots.length)]
    gon.randomSpot = @randomSpot
    if @randomSpot
      respond_to do |format|
        format.js { render partial: "maps/map" }
      end
    else
      flash[:danger] = "there are none of what you are asking for"
      redirect_to places_path
    end
  end

end
