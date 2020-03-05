class AnimesController < ApplicationController
    def index
        @animes = Anime.all
        render json: @animes
    end


    def create
        @anime = Anime.create(title: params[:title], image_url: params[:image_url], rating: params[:rating], description: params[:description] , user_id: 1 )
        
        render json: @anime
    end

    def update
        @anime = Anime.find(params[:id])
        @anime.update(title: params[:title], image_url: params[:image_url], rating: params[:rating], description: params[:description] , user_id: 1 )

        render json: @anime
    end

    def destroy
        @anime = Anime.find(params[:id])
        @anime.destroy
        render json: { message: "I'll be back!" }
    end



    
end
