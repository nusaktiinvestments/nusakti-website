'use client';

export default function AIAssistantSection() {
  const features = [
    {
      icon: '🧠',
      title: 'Predictive Analytics',
      description: 'ML-powered forecasting for market trends, demand planning, and resource optimization.',
    },
    {
      icon: '⚡',
      title: 'Process Automation',
      description: 'Intelligent RPA systems streamlining operations and reducing manual workflows.',
    },
    {
      icon: '📈',
      title: 'Real-time Intelligence',
      description: 'Live dashboards and alerts providing instant insights across all business divisions.',
    },
    {
      icon: '🔒',
      title: 'Risk Management',
      description: 'AI-driven anomaly detection protecting assets and ensuring regulatory compliance.',
    },
    {
      icon: '🎯',
      title: 'Optimization Engine',
      description: 'Advanced algorithms maximizing efficiency in supply chain, pricing, and resource allocation.',
    },
    {
      icon: '🌐',
      title: 'Natural Language AI',
      description: 'Conversational interfaces enabling intuitive interaction with enterprise systems.',
    },
  ];

  return (
    <section id="ai" className="section-container bg-navy-900/50 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading mb-4">AI-Powered <span className="gradient-text">Automation</span></h2>
          <p className="luxury-subheading max-w-2xl mx-auto">
            Leveraging artificial intelligence and machine learning to revolutionize business operations and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-luxury hover:border-gold-500/50 group animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 origin-left">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Benefits */}
        <div className="glass-effect p-12 rounded-3xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Business Impact</h3>
              <ul className="space-y-4">
                {[
                  '40% improvement in operational efficiency',
                  '60% reduction in decision-making time',
                  '$50M+ annual cost savings',
                  '99.9% system uptime and reliability',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-gold-500 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Deployment Areas</h3>
              <div className="space-y-3">
                {[
                  'Supply Chain Optimization',
                  'Customer Service Chatbots',
                  'Predictive Maintenance',
                  'Financial Forecasting',
                  'Fraud Detection',
                  'Inventory Management',
                ].map((area, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-gold-500/30 transition-colors"
                  >
                    <p className="text-gold-400 font-medium">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-gold">Explore AI Solutions</button>
        </div>
      </div>
    </section>
  );
}
