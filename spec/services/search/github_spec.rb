require 'rails_helper'

RSpec.describe Search::Github, type: :model do
  let(:client) { double :client, search_repositories: response }
  let(:response) { double :response, items: search_result }
  let(:search_result) { JSON.parse(file_fixture("github_search_response.json").read)  }
  let(:query_str) { 'sample query' }

  before do
    allow(Octokit::Client).to receive(:new).and_return(client)
  end

  subject { described_class.new }

  describe '#query' do
    it 'sends request to github using Octokit' do
      expect(client).to receive(:search_repositories)
      subject.query(query_str)
    end
  end
end