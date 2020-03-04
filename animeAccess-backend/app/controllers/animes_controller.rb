class AnimesController < ApplicationController
    def index
        @animes = Anime.all
        render json: @animes
    end


    def create
        @anime = Anime.create(title: params[:title], image_url: params[:image_url], rating: params[:rating], description: params[:description] , user_id: 1 )
        
        render json: @anime
    end

    
end
