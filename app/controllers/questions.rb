get "/questions" do
  @questions = Question.all
  erb :"questions/index"
end

get "/questions/:id" do
  @question = Question.find(params[:id])
  erb :"/questions/show"
end

post '/questions' do
  # @user = current_user
  # @question = Question.new(title: params[:title], body: params[:body])

end
