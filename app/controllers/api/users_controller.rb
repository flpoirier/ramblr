class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
    @user.avatar ||= "http://unblurapp.com/profs/images/default.jpg"
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def follow
    @follow = current_user.out_follows.new(followed_user_id: params[:id])
    unless @follow.save
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @follow = current_user.out_follows.find_by(followed_user_id: params[:id])
    unless @follow.destroy
      render json: @follow.errors.full_messages, status: 422
    end
  end

	private
	def user_params
		params.require(:user).permit(:username, :password, :avatar)
	end

end
