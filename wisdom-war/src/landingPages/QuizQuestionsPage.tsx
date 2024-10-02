import Navbar from "../components/NavBar";
import QuestionComponent from "../components/quiz/Question";


const QuizQuestionsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <Navbar title="Quiz" />
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">How well do you know your cohort?</h1>
        </div>

        {/* Display all questions on one page */}
        <div className="w-full">
        <QuestionComponent/>   
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionsPage;



