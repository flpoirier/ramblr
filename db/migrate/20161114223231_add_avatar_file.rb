class AddAvatarFile < ActiveRecord::Migration
  def change
    def self.up
      change_table :users do |t|
        t.attachment :avatar
      end
    end

    def self.down
      remove_attachment :users, :avatar
    end
  end
end
