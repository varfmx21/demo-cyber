const Features = () => {
  const features = [
    {
      title: 'Automated Assessments',
      description: 'Continuous vulnerability scanning keeps your systems secure 24/7. Identify and remediate threats before they become problems.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: 'from-cyber-blue-500 to-cyan-500'
    },
    {
      title: 'Readiness Scoring',
      description: 'Real-time security posture rating gives you instant visibility into your cybersecurity health. Track improvements over time.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-cyber-teal-500'
    },
    {
      title: 'Compliance Tools',
      description: 'Simplified compliance frameworks designed for small businesses. Meet GDPR, SOC 2, and industry standards with confidence.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-cyber-teal-500 to-emerald-500'
    },
    {
      title: 'Cyber Insurance Path',
      description: 'Guided steps to qualify for and obtain cyber insurance. Understand requirements, improve your posture, and connect with providers.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-green-500'
    }
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Complete Cybersecurity Platform
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Everything you need to protect your business and satisfy cyber insurance requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-cyber-teal-200"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional benefits section */}
        <div className="mt-12 sm:mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyber-blue-600 to-cyber-teal-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Why Choose CyberGuard?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
                  <div className="text-base sm:text-lg text-cyber-blue-100">Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-base sm:text-lg text-cyber-blue-100">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
                  <div className="text-base sm:text-lg text-cyber-blue-100">Protected Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
