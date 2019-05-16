module Search
  class Github
    def initialize
      @client = Octokit::Client.new(access_token: ENV['GITHUB_TOKEN'])
      @options = {
          per_page: 20
      }
    end

    def query(str)
      response = @client.search_repositories(str, @options)
      response.items.map(&:to_h)
    end
  end
end