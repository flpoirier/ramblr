# == Schema Information
#
# Table name: follows
#
#  id               :integer          not null, primary key
#  follower_id      :integer          not null
#  followed_user_id :integer          not null
#

class Follow < ActiveRecord::Base

  belongs_to(
    :follower,
    :class_name => "User",
    :foreign_key => :follower_id,
    :primary_key => :id
  )

  belongs_to(
    :followed_user,
    :class_name => "User",
    :foreign_key => :followed_user_id,
    :primary_key => :id
  )

end
