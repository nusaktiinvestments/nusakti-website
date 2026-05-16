'use client';

export default function ManufacturingSection() {
  const capabilities = [
    {
      category: 'Production Capacity',
      stat: '500K+ units',
      description: 'Annual production capability with multi-shift operations',
    },
    {
      category: 'Facilities',
      stat: '12 locations',
      description: 'Strategically positioned manufacturing centers globally',
    },
    {
      category: 'Workforce',
      stat: '5,000+ employees',
      description: 'Skilled professionals driving operational excellence',
    },
    {
      category: 'Automation',
      stat: '85% automated',
      description: 'Industry-leading robotics and smart manufacturing systems',
    },
  ];

  const processes = [
    'Precision Engineering',
    'Quality Assurance',
    'Supply Chain Optimization',
    'Just-in-Time Manufacturing',
    'Industry 4.0 Integration',
    'Sustainable Practices',
  ];

  return (
    <section id="manufacturing" className="section-container relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading mb-4">Manufacturing <span className="gradient-text">Excellence</span></h2>
          <p className="luxury-subheading max-w-2xl mx-auto">
            State-of-the-art facilities combining advanced automation with precision craftsmanship to deliver superior quality products.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="card-luxury text-center animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-sm text-gold-500 font-semibold uppercase tracking-wide mb-2">
                {cap.category}
              </p>
              <p className="text-4xl font-bold gradient-text mb-3">{cap.stat}</p>
              <p className="text-sm text-gray-400">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Processes */}
        <div className="glass-effect p-12 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Manufacturing Processes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processes.map((process, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400"></div>
                <span className="font-medium text-gray-200">{process}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-outline-gold">Schedule Facility Tour</button>
        </div>
      </div>
    </section>
  );
}
