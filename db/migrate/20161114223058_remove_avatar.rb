class RemoveAvatar < ActiveRecord::Migration
  def change
    remove_column :users, :avatar
  end
end
