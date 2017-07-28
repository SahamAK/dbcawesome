get "/votes" do
  erb :"/votes/index"
end

post '/questions/:id/vote' do
  @question = Question.find(params[:id])
  p params
  @question.votes.create(voter: current_user, vote_value: params[:vote_value])
  puts "question vote counter"
  # use the following line to ajax here
  # p @question.votes.sum(:vote_value)
  if request.xhr?
    puts "I'm in xhr!"
    @question.votes.sum(:vote_value).to_s
  else
    redirect '/questions'
  end
end
