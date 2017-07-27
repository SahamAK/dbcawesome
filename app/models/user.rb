class User < ActiveRecord::Base
  has_many :questions
  has_many :answers

  def password
    @password ||= BCrypt::Password.new(self.password_hash)
  end

  def password=(password_new)
    @password = BCrypt::Password.create(password_new)
    self.password_hash = @password
  end


end
