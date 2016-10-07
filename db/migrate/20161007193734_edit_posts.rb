class EditPosts < ActiveRecord::Migration
  def change
    add_column :posts, :image, :string
    add_column :posts, :quote, :string
    add_column :posts, :commentary, :string
  end
end
