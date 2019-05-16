module Api
  module V1
    class SearchController < ApiController
      def repositories
        result =  search_client.query(params[:query])
        render json: result
      end

      private

      def search_client
        @client ||= Search::Github.new
      end
    end
  end
end