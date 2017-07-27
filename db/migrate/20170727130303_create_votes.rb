class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voter_id, null:false
      t.references :votable, polymorphic: true, index: true
      t.integer :vote_value, null:false

      t.timestamps
    end
  end
end
