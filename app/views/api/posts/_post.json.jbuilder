json.extract! post, :id, :user_id, :post_type, :title, :body, :created_at, :author, :image, :quote, :commentary, :thumbnail, :link, :audio, :video, :likes

json.liked post.liked_by?(current_user)
