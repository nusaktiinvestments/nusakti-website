'use client';

export default function InvestmentsSection() {
  const investmentPortfolio = [
    {
      title: 'Technology Ventures',
      description: 'Investments in cutting-edge tech startups and digital transformation solutions.',
      return: '28-35%',
      focus: 'AI, Cloud, SaaS',
    },
    {
      title: 'Real Estate & Infrastructure',
      description: 'Strategic property and infrastructure investments in high-growth regions.',
      return: '18-24%',
      focus: 'Commercial, Industrial',
    },
    {
      title: 'Commodities & Resources',
      description: 'Diversified portfolio in precious metals, energy, and agricultural commodities.',
      return: '15-22%',
      focus: 'Gold, Oil, Agriculture',
    },
    {
      title: 'Manufacturing & Industrial',
      description: 'Stakes in established and emerging manufacturing entities across sectors.',
      return: '20-28%',
      focus: 'Advanced Manufacturing',
    },
  ];

  return (
    <section id="investments" className="section-container bg-navy-900/50 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="luxury-heading mb-4">Investment <span className="gradient-text">Portfolio</span></h2>
          <p className="luxury-subheading max-w-2xl mx-auto">
            Strategically diversified investments generating sustainable returns across multiple asset classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {investmentPortfolio.map((portfolio, i) => (
            <div
              key={i}
              className="card-luxury border-l-4 border-l-gold-500 hover:border-l-gold-400 animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{portfolio.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{portfolio.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Expected Return</p>
                  <p className="text-2xl font-bold gradient-text">{portfolio.return}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Focus Areas</p>
                  <p className="text-sm text-gold-400">{portfolio.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-gold">View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
}
