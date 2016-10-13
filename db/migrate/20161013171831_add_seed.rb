class AddSeed < ActiveRecord::Migration
  def change
    add_column :users, :seed, :string
  end
end
