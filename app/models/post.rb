# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  post_type          :string           not null
#  t=itle              :string
#  body               :string
#  created_at         :datetime
#  updated_at         :datetime
#  quote              :string
#  commentary         :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ActiveRecord::Base
  
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  def author
    self.user.username
  end

  def thumbnail
    self.user.avatar
  end

end
