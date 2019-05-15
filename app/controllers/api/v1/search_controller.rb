module Api
  module V1
    class SearchController < ApiController
      def repositories
        render json: {success: 'setup is done'}
      end
    end
  end
end