class Api::FollowsController < ApplicationController

  def index
    @follows = Follow.where(follower_id: current_user.id)
    render "api/follows/all"
  end

end
