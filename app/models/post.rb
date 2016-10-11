# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  post_type          :string           not null
#  title              :string
#  body               :string
#  created_at         :datetime
#  updated_at         :datetime
#  quote              :string
#  commentary         :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  link               :string
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#  video_file_name    :string
#  video_content_type :string
#  video_file_size    :integer
#  video_updated_at   :datetime
#

class Post < ActiveRecord::Base

  has_attached_file :image, default_url: "cat.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :audio, default_url: "missing.png"
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  has_attached_file :video, default_url: "missing.png"
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/

  belongs_to :user

  def author
    self.user.username
  end

  def thumbnail
    self.user.avatar
  end

end
