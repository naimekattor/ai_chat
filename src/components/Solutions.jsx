import React from 'react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      {/* Our Solutions Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6 text-center">
          Our Solutions
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-12 text-center">
          Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solution Card 1: Validify */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500/50 hover:border-green-400 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Validify</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mitigate compliance risk with powerful AI that optimizes chart
              reviews for accuracy, integrity, coding, and compliance. Validify
              automatically identifies documentation gaps, ensures coding
              accuracy, and maintains regulatory compliance.
            </p>
          </div>

          {/* Solution Card 2: Redactify */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-orange-500/50 hover:border-orange-400 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Redactify</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Effortlessly redact HIPAA identifiers from text, documents, and
              structured data with Redactify – automating your compliance
              workflow. Protect sensitive patient information while maintaining
              clinical context.
            </p>
          </div>

          {/* Solution Card 3: TranscriptX */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500/50 hover:border-blue-400 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.431.695 18.683 18.683 0 01-2.023.238L15 21l-3.375-1.125c-.77-.257-1.574-.389-2.39-.389-.023 0-.047 0-.07 0a18.682 18.682 0 01-5.143.695.75.75 0 01-.43-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">TranscriptX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Spend less time documenting. TranscriptX dictates highly accurate
              medical transcriptions of patient encounters into text, understanding
              complex medical terminology and clinical context for superior
              accuracy.
            </p>
          </div>

          {/* Solution Card 4: Chartwright */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-pink-500/50 hover:border-pink-400 transition-colors duration-300 flex flex-col items-start text-left">
            <div className="mb-4">
              <svg className="w-12 h-12 text-pink-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041 16.971-12.006a1.278 1.278 0 00.028-1.834 1.25 1.25 0 00-1.834-.029l-15.046 10.63H8.25a.75.75 0 010-1.5H18a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V7.21l-14.232 10.063a1.25 1.25 0 00-.028 1.834 1.278 1.278 0 001.834.029l15.046-10.631h4.5a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V7.21l-14.232 10.063a1.25 1.25 0 00-.028 1.834 1.278 1.278 0 001.834.029l15.046-10.631h4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Chartwright</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your best friend with charting – turn any normal text into a high-
              quality chart, delivered exactly how healthcare professionals need it
              with extensive customization options to match your workflow and
              documentation standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
