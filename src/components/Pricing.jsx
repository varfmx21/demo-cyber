import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'per month',
      description: 'Perfect for startups and small teams',
      features: [
        'Up to 10 users',
        'Monthly security assessments',
        'Basic compliance tools',
        'Email support',
        'Security dashboard',
        '30-day report history'
      ],
      highlighted: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$149',
      period: 'per month',
      description: 'For growing businesses with advanced needs',
      features: [
        'Up to 50 users',
        'Weekly security assessments',
        'Advanced compliance tools',
        'Priority support',
        'Custom security policies',
        '1-year report history',
        'Cyber insurance guidance',
        'API access'
      ],
      highlighted: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations requiring custom solutions',
      features: [
        'Unlimited users',
        'Daily security assessments',
        'Full compliance suite',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited history',
        'Dedicated account manager',
        'On-premise deployment option',
        'Custom SLA'
      ],
      highlighted: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-3">Pricing</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Plan
          </p>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Simple, transparent pricing that grows with your business
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl transform md:scale-105 border-4 border-blue-500' 
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200'
              } relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                {plan.price === 'Custom' && (
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-green-500'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Need help choosing? <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
