import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-5xl mx-auto text-center px-4 py-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-8 sm:mb-12">
          About Clin Technologies
        </h2>

        {/* First Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          Headquartered in the Midwest, Clin Technologies is a{' '}
          <span className="font-semibold text-white">specialized AI firm</span> that empowers healthcare providers across the Midwest
          and beyond to conquer their most pressing operational challenges. We deliver this through a powerful and flexible AI platform that
          powers both a <span className="font-semibold text-white">suite of ready-to-deploy solutions</span> for documentation and compliance, and the creation of{' '}
          <span className="font-semibold text-white">fully bespoke engines</span> for
          enterprise-level transformation.
        </p>

        {/* Second Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          Our expertise lies in applying cutting-edge{' '}
          <span className="font-semibold text-white">Large Language Models (LLMs)</span> and{' '}
          <span className="font-semibold text-white">machine learning (ML)</span> to solve real-world
          challenges in healthcare documentation. We partner closely with individual practitioners, clinics, and healthcare organizations,
          leveraging <span className="font-semibold text-white">meticulously gathered real-world data</span> from professionals to build the exceptionally robust and uniquely effective
          datasets that power these advanced systems.
        </p>

        {/* Third Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          This same proven AI framework serves as the foundation for our enterprise partnerships. Whether you need an{' '}
          <span className="font-semibold text-white">immediate solution
            from our product suite</span> or a{' '}
          <span className="font-semibold text-white">strategic partner to build a custom engine</span> for challenges like Utilization Management, we provide the
          right tool for the job. Our mission is to transform your data into a proprietary asset, enabling data-driven decisions that{' '}
          <span className="font-semibold text-white">eliminate
            administrative friction</span> and allow you to focus on what matters most.
        </p>
      </div>
    </div>
  );
};

export default About;
