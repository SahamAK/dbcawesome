class User < ActiveRecord::Base
  has_many :questions, foreign_key: :author_id
  has_many :answers, foreign_key: :author_id
  has_many :comments, foreign_key: :commenter_id
  has_many :votes, foreign_key: :voter_id

  def password
    @password ||= BCrypt::Password.new(self.password_hash)
  end

  def password=(password_new)
    @password = BCrypt::Password.create(password_new)
    self.password_hash = @password
  end

  def authenticate(password)
    self.password == password
  end
end
