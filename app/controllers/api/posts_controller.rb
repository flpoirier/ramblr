class Api::PostsController < ApplicationController

	def create

		@post = Post.new(post_params)
    @post.user_id = current_user.id

		if @post.save
			login(@user)
			render "api/users/show"
		else
			render json: @post.errors.full_messages, status: 422
		end

	end

	private

	def user_params
		params.require(:post).permit(:post_type, :title, :body)
	end

end
