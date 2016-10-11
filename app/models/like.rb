# == Schema Information
#
# Table name: likes
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  post_id :integer          not null
#

class Like < ActiveRecord::Base

  belongs_to :user
  belongs_to :post

end
