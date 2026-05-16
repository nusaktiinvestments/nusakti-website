'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="mb-6 inline-block">
          <span className="text-gold-500 font-semibold text-sm md:text-base tracking-widest uppercase">
            Welcome to the Future of Business
          </span>
        </div>

        <h1 className="luxury-heading mb-6 animate-fade-in">
          Nusakti <span className="gradient-text">Ecosystem</span>
        </h1>

        <p className="luxury-subheading mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Strategic investments, advanced manufacturing, and intelligent automation converge to create unprecedented value and sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn-gold">Explore Our Ecosystem</button>
          <button className="btn-outline-gold">Learn More</button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: '$500M+', label: 'Assets Under Management' },
            { number: '50+', label: 'Portfolio Companies' },
            { number: '15+', label: 'Years of Excellence' },
          ].map((stat, i) => (
            <div
              key={i}
              className="card-luxury text-center"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
