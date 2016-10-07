class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :post_type, null: false
      t.string :title
      t.string :body
      t.timestamps
    end
    add_index :posts, :user_id
  end
end
