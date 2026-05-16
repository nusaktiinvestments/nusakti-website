'use client';

export default function EcosystemSection() {
  const ecosystemAreas = [
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'State-of-the-art facilities with advanced automation and quality control systems.',
    },
    {
      icon: '💰',
      title: 'Investment Management',
      description: 'Strategic portfolio allocation across emerging and established markets.',
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Cutting-edge artificial intelligence driving operational excellence.',
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Environmental responsibility integrated into every business operation.',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights powering strategic decision-making across divisions.',
    },
    {
      icon: '🚀',
      title: 'Innovation Hub',
      description: 'Continuous R&D fostering breakthrough technologies and methodologies.',
    },
  ];

  return (
    <section id="ecosystem" className="section-container relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading mb-4">Our <span className="gradient-text">Ecosystem</span></h2>
          <p className="luxury-subheading max-w-2xl mx-auto">
            Six pillar divisions working in harmony to deliver exceptional results and sustainable value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemAreas.map((area, i) => (
            <div
              key={i}
              className="card-luxury hover:border-gold-500/50 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed">{area.description}</p>
              <div className="mt-4 flex items-center gap-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
