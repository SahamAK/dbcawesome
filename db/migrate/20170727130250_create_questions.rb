class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.integer :author_id, null:false, index:true

      t.timestamps
    end
  end
end
