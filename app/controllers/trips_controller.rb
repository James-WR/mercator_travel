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

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user
    if @order.save!
      redirect_to trip_path(@trip)
    else
      render :new
    end
  end

  private

  def trip_params
    params.require(:trip).permit(:name, :destination_exact)
  end
end
