# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  post_type  :string           not null
#  title      :string
#  body       :string
#  created_at :datetime
#  updated_at :datetime
#  image      :string
#  quote      :string
#  commentary :string
#

class Post < ActiveRecord::Base

  belongs_to :user

  def author
    self.user.username
  end

end
