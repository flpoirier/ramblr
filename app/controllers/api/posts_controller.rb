class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
  end

	def create
		@post = Post.new(post_params)
    @post.user_id = current_user.id
		if @post.save
			render "api/posts/show"
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	private
	def user_params
		params.require(:post).permit(:post_type, :title, :body)
	end

end
