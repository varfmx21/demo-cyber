const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for startups and small teams",
      features: [
        "Monthly security assessments",
        "Basic readiness scoring",
        "Email support",
        "Up to 10 users",
        "Essential compliance reports",
        "Community access"
      ],
      highlighted: false,
      ctaText: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$299",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Weekly security assessments",
        "Advanced readiness scoring",
        "Priority support (24/7)",
        "Up to 50 users",
        "Full compliance suite",
        "Cyber insurance guidance",
        "Custom security policies",
        "API access"
      ],
      highlighted: true,
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Continuous monitoring",
        "AI-powered threat detection",
        "Dedicated account manager",
        "Unlimited users",
        "White-label options",
        "Advanced integrations",
        "Custom SLAs",
        "On-premise deployment"
      ],
      highlighted: false,
      ctaText: "Contact Sales"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-2xl transform md:scale-105 border-4 border-blue-500'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlighted ? 'text-blue-200' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition mb-8 ${
                  plan.highlighted
                    ? 'bg-white text-blue-900 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.ctaText}
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-300' : 'text-green-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-600">
            Need a custom plan? <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
