class TripsController < ApplicationController
  def index
    @trips = Trip.all
    @markers = @trips.geocoded.map do |trip|
      {
        lat: trip.latitude,
        lng: trip.longitude,
        info_window: render_to_string(partial: "info_window", locals: { trip: trip }),
        image_url: helpers.asset_url("compass2.png")
      }
    end
  end

  def show
    @trip = Trip.find(params[:id])
  end
end
