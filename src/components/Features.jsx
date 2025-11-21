import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Automated Assessments',
      description: 'Continuous security scanning and automated vulnerability assessments that run in the background, keeping your business protected 24/7.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Readiness Scoring',
      description: 'Get real-time security posture scores with actionable insights. Track improvements over time and benchmark against industry standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Compliance Tools',
      description: 'Streamline compliance with GDPR, HIPAA, PCI-DSS, and other regulations. Automated reporting and documentation at your fingertips.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cyber Insurance Guidance',
      description: 'Step-by-step guidance through the cyber insurance process. Meet insurance requirements and get the best coverage for your business.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-3">Features</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Stay Secure
          </p>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive cybersecurity tools designed specifically for small businesses
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Platform?
            </h3>
            <p className="text-lg text-blue-100 mb-8">
              We make enterprise-grade cybersecurity accessible and affordable for small businesses
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Expert Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
