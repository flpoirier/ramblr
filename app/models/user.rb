# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  seed                :string
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base

  has_many :likes
  has_many :posts

  has_attached_file :avatar, default_url: "http://ashburnrobotics.com/gearedup/wp-content/uploads/sites/3/2016/10/generic-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many(
    :out_follows,
    :class_name => "Follow",
    :foreign_key => :follower_id,
    :primary_key => :id
  )

  has_many(
    :in_follows,
    :class_name => "Follow",
    :foreign_key => :followed_user_id,
    :primary_key => :id
  )

  has_many :followers, :through => :in_follows, :source => :follower
  has_many :followed_users, :through => :out_follows, :source => :followed_user
  has_many :followed_posts, :through => :followed_users, :source => :posts

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

  def followed?(user)
  end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
