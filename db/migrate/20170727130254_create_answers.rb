class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :question_id, null:false, index: true
      t.integer :author_id, null:false, index: true
      t.string :body, null:false

      t.timestamps
    end
  end
end
