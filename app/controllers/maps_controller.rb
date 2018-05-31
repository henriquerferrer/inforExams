class MapsController < ApplicationContoller

    def randomize  
      spots = @client.spots(40.191327, -8.4136871, radius: 1000, types: 'restaurant')
      respond_to do |format|
        format.js { @randomSpot = spots[rand(spots.length)] }
      end
    end
    