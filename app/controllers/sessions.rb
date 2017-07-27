get '/sessions/new' do
  erb :'sessions/new'
end


post '/sessions' do
  @user = User.find_by(username: params[:username])

  if @user
    if @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect '/questions/index'
    else
      redirect '/sessions/new'
    end
  else
    redirect '/sessions/new'
  end
end

delete 'sessions/:id' do
  session[:user_id] = nil
  redirect '/'
end
