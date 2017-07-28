get "/answers" do

  erb :"/answers/index"
end

post "/answers" do
  @answer = Answer.new(question_id: params[:question_id], body: params[:body], author: current_user)

  if @answer.save
    if request.xhr?
      erb :"/questions/_answer", layout: false, locals: { answer: @answer }
    else
      redirect "/questions/#{@answer.question.id}"
    end
  else
    @errors = ["Oops!  There was an error saving the answer.  Try again!"]
    redirect "/question/#{@answer.question.id}"
  end

end
