const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      description: 'Perfect for small teams getting started with cybersecurity',
      features: [
        'Monthly vulnerability scans',
        'Basic compliance dashboard',
        'Email support',
        'Up to 10 users',
        'Basic reporting',
        'Security awareness training'
      ],
      highlighted: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Growth',
      price: '299',
      description: 'Ideal for growing businesses with expanding security needs',
      features: [
        'Weekly vulnerability scans',
        'Advanced compliance tools',
        'Priority support',
        'Up to 50 users',
        'Custom reporting',
        'Security awareness training',
        'Cyber insurance guidance',
        'API access'
      ],
      highlighted: true,
      cta: 'Get Started',
      badge: 'Most Popular'
    },
    {
      name: 'Secure',
      price: '599',
      description: 'Comprehensive protection for security-conscious organizations',
      features: [
        'Daily vulnerability scans',
        'Full compliance suite',
        '24/7 dedicated support',
        'Unlimited users',
        'Advanced analytics',
        'Security awareness training',
        'Cyber insurance facilitation',
        'API access',
        'Penetration testing',
        'Incident response planning'
      ],
      highlighted: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Choose the plan that fits your business size and security requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyber-blue-600 to-cyber-teal-600 text-white shadow-2xl scale-105 md:scale-110 z-10'
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200'
              } p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${plan.highlighted ? 'text-cyber-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold">${plan.price}</span>
                  <span className={`text-lg sm:text-xl ml-2 mb-1 sm:mb-2 ${plan.highlighted ? 'text-cyber-blue-100' : 'text-gray-600'}`}>
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-cyber-teal-300' : 'text-cyber-teal-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm sm:text-base ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 sm:py-4 px-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-cyber-blue-600 hover:bg-gray-100 shadow-lg'
                    : 'bg-cyber-blue-600 text-white hover:bg-cyber-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Need a custom solution? <a href="#contact" className="text-cyber-blue-600 hover:text-cyber-blue-700 font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
