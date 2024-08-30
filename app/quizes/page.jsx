'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const quizzes = [
  {
    id: 1,
    title: 'Quiz 1',
    questions: [
      {
        id: 1,
        type: 'multiple',
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
      },
      {
        id: 2,
        type: 'single',
        question: '2 + 2 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      {
        id: 3,
        type: 'open',
        question: 'Describe the process of photosynthesis.',
        correctAnswer: 'Photosynthesis is the process used by plants and other organisms to convert light energy into chemical energy stored in glucose.'
      },
      // Additional questions
      {
        id: 4,
        type: 'multiple',
        question: 'Which of the following is a prime number?',
        options: ['2', '4', '6', '8'],
        correctAnswer: '2'
      },
      {
        id: 5,
        type: 'single',
        question: 'What is the boiling point of water?',
        options: ['90°C', '100°C', '110°C', '120°C'],
        correctAnswer: '100°C'
      },
      {
        id: 6,
        type: 'open',
        question: 'Explain the theory of relativity.',
        correctAnswer: 'The theory of relativity, proposed by Albert Einstein, encompasses two theories: special relativity and general relativity. It describes the relationship between space and time and the influence of gravity on the fabric of space-time.'
      },
      {
        id: 7,
        type: 'multiple',
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        id: 8,
        type: 'single',
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'],
        correctAnswer: 'Harper Lee'
      },
      {
        id: 9,
        type: 'open',
        question: 'Describe the process of cellular respiration.',
        correctAnswer: 'Cellular respiration is a metabolic process that converts glucose and oxygen into energy (ATP), carbon dioxide, and water. It involves glycolysis, the citric acid cycle, and oxidative phosphorylation.'
      },
      {
        id: 10,
        type: 'multiple',
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Pb', 'Fe'],
        correctAnswer: 'Au'
      },
      {
        id: 11,
        type: 'single',
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
      },
      {
        id: 12,
        type: 'open',
        question: 'Explain the concept of natural selection.',
        correctAnswer: 'Natural selection is a process in evolutionary biology where organisms with traits better suited to their environment have higher survival and reproduction rates. Over time, these advantageous traits become more common in the population.'
      },
      {
        id: 13,
        type: 'multiple',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        correctAnswer: 'Mitochondria'
      }
    ],
    duration: 10 // minutes
  }
];

const QuizPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[0]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(currentQuiz.duration * 60);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedQuestions, setAttemptedQuestions] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, submitted]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setAttemptedQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const handleSubmit = () => {
    const allAttempted = currentQuiz.questions.every(q => attemptedQuestions[q.id]);
    if (allAttempted) {
      setSubmitted(true);
      setTimeout(() => {
        router.push('/account');
      }, 3000);
    } else {
      alert('Please attempt all questions before submitting.');
    }
  };

  const getCorrectAnswers = () => {
    return currentQuiz.questions.filter(q => {
      const userAnswer = answers[q.id];
      return userAnswer === q.correctAnswer;
    });
  };

  const correctAnswers = submitted ? getCorrectAnswers() : [];

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 bg-gray-200 p-4 h-screen sticky top-0 border-r md:block hidden">

        <h3 className="text-lg font-semibold mt-6">Question Status</h3>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8 mt-4">
            {currentQuiz.questions.map(question => (
                <li key={question.id} className="flex items-center justify-center">
                    <div className={`w-8 h-12 border rounded flex items-center justify-center font-semibold text-sm ${attemptedQuestions[question.id] ? 'border-green-500 bg-emerald-700' : 'border-gray-400'}`}>
                        {question.id}
                    </div>
                </li>
            ))}
        </ul>

      </aside>

      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-6">Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</p>

          {currentQuiz.questions.map(question => (
            <div key={question.id} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
              {question.type === 'multiple' || question.type === 'single' ? (
                question.options.map(option => (
                  <div key={option} className="mb-2">
                    <input
                      type={question.type === 'multiple' ? 'checkbox' : 'radio'}
                      id={`${question.id}-${option}`}
                      name={question.id.toString()}
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      className="mr-2"
                    />
                    <label htmlFor={`${question.id}-${option}`}>{option}</label>
                  </div>
                ))
              ) : (
                <textarea
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="w-full border-gray-300 p-2 rounded-lg"
                  rows={4}
                />
              )}
            </div>
          ))}

          <div className="flex justify-between mt-6">
            {submitted ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Quiz Performance</h2>
                <ul>
                  {correctAnswers.map((q, index) => (
                    <li key={index} className="mb-2">
                      <div className="font-semibold">{q.question}</div>
                      <div className="text-gray-700">Your answer: {answers[q.id]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-hover transition"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
