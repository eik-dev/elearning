'use client';
import { useState } from "react";

const steps = [
    {
        video: '/video.mp4',
        document: 'document.pdf',
        text: 'Welcome to the training. In this step, we will cover the basics of energy management. Learn about the key principles and practices that will help you understand the subject better.',
    },
    {
        video: '/video.mp4',
        document: '/document.pdf',
        text: 'In this step, we dive deeper into advanced topics, including energy auditing and optimization techniques. This step includes practical examples and case studies to solidify your understanding.',
    },
    {
        video: '/video.mp4',
        document: '/document.pdf',
        text: 'Here, we will wrap up the training with a focus on real-world applications and best practices. Review key takeaways and explore additional resources for further learning.',
    }
];

export default function TrainingPage() {
    const [currentStep, setCurrentStep] = useState(0);

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

    const { video, document, text } = steps[currentStep];

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Training Step {currentStep + 1}</h1>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Step {currentStep + 1} of {steps.length}</p>
            </div>
            
            {/* Video Player */}
            <div className="mb-8">
                <video
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    controls
                    src={video}
                    alt={`Training Video Step ${currentStep + 1}`}
                />
            </div>
            
            {/* Document Section */}
            <div className="mb-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-700">Downloadable Document</h2>
                <a
                    href={document}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-md inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View or Download Document
                </a>
            </div>
            
            {/* Text Tutorial */}
            <div className="mb-8 bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Text Tutorial</h2>
                <p className="text-sm sm:text-base text-gray-700">{text}</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="bg-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                    className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
