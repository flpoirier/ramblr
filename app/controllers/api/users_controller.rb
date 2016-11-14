class Api::UsersController < ApplicationController

  def index
    @users = []
    User.all.each do |user|
      @users << user if user.seed == "true"
    end
    render "api/users/all"
  end

  def create
		@user = User.new(user_params)
    @user.avatar ||= "http://unblurapp.com/profs/images/default.jpg"
    @user.seed ||= false
		if @user.save
      bwb = User.find_by(username: "beautywithoutborders")
      follow = Follow.new(follower_id: @user.id, followed_user_id: bwb.id)
      follow.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    @follow = current_user.out_follows.new(followed_user_id: params[:id])
    if @follow.save
      @posts = (current_user.followed_posts + current_user.posts)
      @posts.sort_by! { |post| post.created_at }.reverse!
      render "api/posts/all"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @follow = current_user.out_follows.find_by(followed_user_id: params[:id])
    if @follow.destroy
      @posts = (current_user.followed_posts + current_user.posts)
      @posts.sort_by! { |post| post.created_at }.reverse!
      render "api/posts/all"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

	private
	def user_params
		params.require(:user).permit(:username, :password, :avatar)
	end

end
