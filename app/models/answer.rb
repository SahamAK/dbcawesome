class Answer < ActiveRecord::Base
  has_many :comments, as: :commentable
  has_many :votes, as: :votable

  belongs_to :author, class_name: User
  belongs_to :question
end
