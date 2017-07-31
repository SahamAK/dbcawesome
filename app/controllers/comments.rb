post '/answers/:id/comments' do
  @answer = Answer.find(params[:id])
  @comment = Comment.new(commenter: current_user, body: params[:body])
  @answer.comments << @comment

  if request.xhr?
    erb :"/comments/_comment", layout: false, locals: { comment: @comment }
  else
    redirect "/questions/#{@answer.question.id}"
  end

end

post "/questions/:id/comments" do
  @question = Question.find(params[:id])
  @comment = Comment.new(commenter: current_user, body: params[:body])
  @question.comments << @comment

  if request.xhr?
    erb :"/comments/_comment", layout: false, locals: { comment: @comment }
  else
    redirect "/questions/#{@question.id}"
  end

end


