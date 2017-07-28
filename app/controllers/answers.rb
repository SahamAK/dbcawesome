get "/answers" do

  erb :"/answers/index"
end

post "/answers" do
  @answer = Answer.new(question_id: params[:question_id], body: params[:body], author: current_user)

  if @answer.save
    if request.xhr?
      # @answer
    else
      redirect "/questions/#{@answer.question.id}"
    end

  end

end
