class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.reverse
    render "api/posts/all"
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

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render "api/posts/show"
  end

  def like
    @like = current_user.likes.new(post_id: params[:id])
    if @like.save
      @post = Post.find(params[:id])
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def dislike
    @like = current_user.likes.find_by(post_id: params[:id])
    @like.destroy
    render "api/posts/show"
  end

	private
	def post_params
		params.require(:post).permit(:post_type, :title, :body, :image, :quote, :commentary, :link, :audio, :video)
	end

end
