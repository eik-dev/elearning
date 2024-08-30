'use client';
import { useState } from "react";
import confetti from 'canvas-confetti';
import { useRouter } from 'next/navigation';

const steps = [
  {
    video: '/video2.mp4',
    documents: [
      { title: 'Energy Management Basics', url: '/documents/energy-basics.pdf' },
      { title: 'Introduction Slides', url: '/documents/introduction-slides.pdf' }
    ],
    links: [
      { title: 'Read More about Energy Management', url: 'https://example.com/energy-management' },
      { title: 'Watch a Related Webinar', url: 'https://example.com/webinar' }
    ],
    text: 'Welcome to the training. In this step, we will cover the basics of energy management. Learn about the key principles and practices that will help you understand the subject better.',
    instructor: 'Jane Doe',
  },
  {
    video: '/video.mp4',
    documents: [
      { title: 'Advanced Energy Auditing', url: '/documents/advanced-auditing.pdf' },
      { title: 'Optimization Techniques Guide', url: '/documents/optimization-guide.pdf' }
    ],
    links: [
      { title: 'Energy Auditing Standards', url: 'https://example.com/auditing-standards' },
      { title: 'Case Studies on Energy Optimization', url: 'https://example.com/case-studies' }
    ],
    text: 'In this step, we dive deeper into advanced topics, including energy auditing and optimization techniques. This step includes practical examples and case studies to solidify your understanding.',
    instructor: 'John Smith',
  },
  {
    video: '/video2.mp4',
    documents: [
      { title: 'Real-World Applications', url: '/documents/real-world-applications.pdf' },
      { title: 'Additional Resources', url: '/documents/additional-resources.pdf' }
    ],
    links: [
      { title: 'Best Practices in Energy Management', url: 'https://example.com/best-practices' },
      { title: 'Further Learning Resources', url: 'https://example.com/learning-resources' }
    ],
    text: 'Here, we will wrap up the training with a focus on real-world applications and best practices. Review key takeaways and explore additional resources for further learning.',
    instructor: 'Emily Johnson',
  }
];

export default function TrainingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [question, setQuestion] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      router.push('/quizes');
    }, 3000);
  };

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const { video, documents, links, text, instructor } = steps[currentStep];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">Training Step {currentStep + 1}</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-2">Step {currentStep + 1} of {steps.length}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 mb-8 lg:mb-0">
          <div className="relative pb-[56.25%] rounded-lg shadow-lg overflow-hidden mb-4">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              src={video}
              alt={`Training Video Step ${currentStep + 1}`}
            />
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-gray-800">Text Tutorial</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">{text}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-700">Downloadable Documents</h2>
            <ul className="space-y-3">
              {documents.map((doc, index) => (
                <li key={index}>
                  <a
                    href={doc.url}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-700">Additional Resources</h2>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">Instructor: {instructor}</h3>
            <textarea
              value={question}
              onChange={handleQuestionChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="4"
              placeholder="Have a question? Ask here..."
            ></textarea>
            <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-md hover:bg-hover transition-all duration-200">
              Submit Question
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-10 gap-6">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="bg-gray-400 text-gray-700 hover:bg-gray-500 hover:text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
        >
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleFinish}
            className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Finish
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="bg-secondary text-white hover:bg-hover px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
