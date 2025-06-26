import React from 'react';

const Technology = () => {
  return (
    <div className="min-h-screen bg-[#0A101C] text-white flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto py-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6 text-center">
          Our Technology
        </h2>
        {/* Introductory Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
          At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions
          use the latest advancements in natural language processing and machine learning to create a system that truly understands the
          complexities of medical documentation.
        </p>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Sophisticated Natural Language Processing */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16H9v-6H7V8h2V6h2v2h2v6h-2v4zm4-6h-2V8h2v4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sophisticated Natural Language Processing</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              At the core of our platform is an
              advanced foundation model. This
              enables our system to grasp the
              nuances of clinical conversations —
              understanding context, recognizing
              intent, and accurately interpreting
              medical terminology. This deep
              comprehension allows the AI to
              generate clear, concise, and
              contextually relevant medical notes
              automatically.
            </p>
          </div>

          {/* Card 2: Learning Mode & Personalization */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16H9v-6H7V8h2V6h2v2h2v6h-2v4zm4-6h-2V8h2v4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Learning Mode & Personalization</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our AI doesn't rely on generic
              templates. We initiate the process by
              learning directly from your specific
              cases and workflows. The system
              intelligently refines its understanding
              and output based on your ongoing
              feedback. With each processed case,
              its accuracy and alignment with your
              unique clinical documentation needs
              become increasingly precise, ensuring
              a truly personalized solution.
            </p>
          </div>

          {/* Card 3: Robust Data Privacy & Security */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4 flex items-center justify-between w-full">
              <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16H9v-6H7V8h2V6h2v2h2v6h-2v4zm4-6h-2V8h2v4z" />
              </svg>
              <div className="flex flex-col items-end">
                <span className="text-xs text-blue-400 border border-blue-400 rounded-full px-3 py-1 mb-1">HIPAA COMPLIANT</span>
                <span className="text-xs text-blue-400 border border-blue-400 rounded-full px-3 py-1">BUSINESS ASSOCIATE AGREEMENT</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Robust Data Privacy & Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Protecting sensitive health information
              is paramount. Our AI solutions are
              architected with a security-first
              approach, incorporating principles like
              “zero trust”. We utilize robust security
              measures, including comprehensive
              encryption (both at rest and in transit)
              and strict, role-based access controls,
              to ensure data integrity and
              confidentiality, limiting access
              exclusively to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
