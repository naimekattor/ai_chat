import React from 'react';

const CaseUse = () => {
  return (
    <div className="min-h-screen bg-[#0A101C] text-white flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-7xl mx-auto py-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6 text-center">
          Case Use
        </h2>
        {/* Introductory Sentence */}
        <p className="text-base sm:text-lg text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
          See how healthcare providers across specialties are transforming their practice with Clin Technologies.
        </p>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Primary Care */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold text-white mb-3">Primary Care</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Dr SJ M.D reduced her documentation time by 52%, allowing her to
              see 3 more patients daily while finishing her charts before leaving
              the office.
            </p>
            <p className="italic text-gray-400 text-sm leading-relaxed mb-2">
              "This AI tool streamlines a tedious process, reduces 'click
              fatigue,' and helps me reclaim some sanity."
            </p>
            <p className="text-gray-500 text-xs mt-auto">— Dr. SJ, MD</p>
          </div>

          {/* Card 2: Emergency Medicine */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold text-white mb-3">Emergency Medicine</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Our ED department implemented Clin Tech, resulting in more
              thorough documentation and a 70% decrease in chart completion
              time during high-volume periods. Our nurses love it.
            </p>
            <p className="italic text-gray-400 text-sm leading-relaxed mb-2">
              — Emergency Department (ED) Nurse Manager
            </p>
          </div>

          {/* Card 3: Behavioral Health */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold text-white mb-3">Behavioral Health</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              "Chartwright has been transformative for our clinic. Our
              therapists were drowning in documentation; we've slashed
              average charting time to <span className="font-semibold text-blue-400">under 3 minutes per patient</span>, freeing up
              hours for direct care. More importantly, we've seen a significant
              reduction in <span className="font-semibold text-blue-400">documentation errors and compliance flags</span>. It's
              not just faster; it's smarter documentation."
            </p>
            <p className="text-gray-500 text-xs mt-auto">— Clinical Director, Behavioral Health Practice</p>
          </div>

          {/* Card 4: Case Management */}
          <div className="bg-[#1A253A] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500 transition-colors duration-300 flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold text-white mb-3">Case Management</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              "Honestly, with the number of patients I manage, documentation
              felt like a constant, losing battle. But this AI feels like getting an
              assistant. It takes my detailed notes and <span className="font-semibold text-blue-400">instantly</span> creates the
              clear, customized charts I need. I'm getting hours back each
              week - hours I can now spend directly with patients, tackling
              barriers, not just typing."
            </p>
            <p className="text-gray-500 text-xs mt-auto">— Social Worker/Case Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseUse;
