get "/votes" do
  erb :"/votes/index"
end

post '/questions/:id/vote' do
  @question = Question.find(params[:id])
  @question.votes.create(voter: current_user, vote_value: params[:vote_value])

  redirect '/questions'
end
