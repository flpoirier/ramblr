class Api::LikesController < ApplicationController

  def create
    debugger
		@like = Like.new(post_id: params["post_id"])
    @like.user_id = current_user.id
		if @like.save
			render "api/posts/show"
		else
			render json: @like.errors.full_messages, status: 422
		end
	end

  def destroy
    @like = Like.find_by(id: params["id"])
    if @like
      @like.delete
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id)
  end

end
