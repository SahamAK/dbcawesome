get '/users/new' do
  erb :'users/new'
end

post '/users' do
  @user = User.new(params[:user])
  @user.save!

  redirect "/"
end

get "/users/:id" do
  @user = User.find(params[:id])

  erb :"/users/show"
end
