import React from 'react';

const KairosHomepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {/* 8-Point Star of Bethlehem Logo */}
              <svg 
                width="44" 
                height="44" 
                viewBox="0 0 100 100" 
                className="text-gray-100"
                fill="currentColor"
              >
                {/* Outer 4 main points */}
                <polygon points="50,5 54,42 50,45 46,42" />
                <polygon points="95,50 58,54 55,50 58,46" />
                <polygon points="50,95 46,58 50,55 54,58" />
                <polygon points="5,50 42,46 45,50 42,54" />
                
                {/* Inner 4 diagonal points */}
                <polygon points="79,21 57,43 53,41 55,37" />
                <polygon points="79,79 57,57 59,53 63,55" />
                <polygon points="21,79 43,57 47,59 45,63" />
                <polygon points="21,21 43,43 41,47 37,45" />
                
                {/* Center circle for depth */}
                <circle cx="50" cy="50" r="8" />
              </svg>
              <span className="text-2xl font-semibold tracking-wide">Kairos</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              <li><a href="#vision" className="hover:text-gray-300 transition-colors">Vision</a></li>
              <li><a href="#dashboard" className="hover:text-gray-300 transition-colors">Dashboard</a></li>
              <li><a href="#individuals" className="hover:text-gray-300 transition-colors">For Individuals</a></li>
              <li><a href="#organizations" className="hover:text-gray-300 transition-colors">For Organizations</a></li>
              <li><a href="#leaders" className="hover:text-gray-300 transition-colors">For Leaders</a></li>
            </ul>

            {/* Secondary Button */}
            <button className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
              Resources
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-6">
            Serve with Purpose
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Equipping the Church to Love People More Effectively
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Kairos removes friction from service and outreach, creating more opportunities for the Gospel to be shared—from one opportune moment to the next.
          </p>
        </div>
      </section>

      {/* CTA Section with Stats */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Every Moment Matters</h2>
          <p className="text-lg text-gray-400 mb-16">
            See how organizations are using Kairos to multiply their kingdom impact
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all">
              <div className="text-5xl font-bold mb-3">1,200+</div>
              <div className="text-gray-400">Active Volunteers Connected</div>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all">
              <div className="text-5xl font-bold mb-3">350+</div>
              <div className="text-gray-400">Organizations Equipped</div>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all">
              <div className="text-5xl font-bold mb-3">8,500+</div>
              <div className="text-gray-400">Service Opportunities Created</div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <button className="px-8 py-4 bg-[#4a90e2] hover:bg-[#357abd] rounded-lg font-semibold text-lg transition-all shadow-lg shadow-[#4a90e2]/20 hover:shadow-[#4a90e2]/30 hover:-translate-y-0.5">
            Access Dashboard
          </button>
        </div>
      </section>

      {/* User Scenarios Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Built for Your Mission</h2>
          <p className="text-lg text-gray-400 text-center mb-16">
            Whether you're serving locally or globally, Kairos meets you where you are
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Card */}
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-xl hover:border-white/10 transition-all group">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">For Individuals</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Looking to serve but not sure where to start? Discover opportunities that match your gifts, schedule, and passion for sharing the Gospel.
              </p>
              <a 
                href="#individuals" 
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                Explore opportunities
                <span>→</span>
              </a>
            </div>

            {/* Organization Card */}
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-xl hover:border-white/10 transition-all group">
              <div className="text-4xl mb-6">🏢</div>
              <h3 className="text-2xl font-semibold mb-4">For Organizations</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Coordinate your outreach efforts, track impact, and mobilize your community more effectively. Simplify service coordination so you can focus on people.
              </p>
              <a 
                href="#organizations" 
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                See how it works
                <span>→</span>
              </a>
            </div>

            {/* Leaders Card */}
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-xl hover:border-white/10 transition-all group">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-semibold mb-4">For Leaders</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Gain clarity on needs, optimize resource allocation, and measure kingdom impact. Lead with confidence knowing every moment is maximized.
              </p>
              <a 
                href="#leaders" 
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Stories of Impact</h2>
          <p className="text-lg text-gray-400 text-center mb-16">
            Real people, real moments, real Gospel opportunities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl relative">
              <div className="text-6xl text-white/10 absolute top-6 left-6 font-serif">"</div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                Kairos helped us connect volunteers with needs in real-time. We've seen a 40% increase in community engagement and countless conversations about faith that wouldn't have happened otherwise.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-semibold">
                  JM
                </div>
                <div>
                  <div className="font-semibold">James Mitchell</div>
                  <div className="text-sm text-gray-500">Outreach Director, Grace Community Church</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl relative">
              <div className="text-6xl text-white/10 absolute top-6 left-6 font-serif">"</div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                As someone who wanted to serve but felt overwhelmed by options, Kairos made it simple. I found a role that fits my schedule and passions, and I've been able to share hope with people I never would have met.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-semibold">
                  SK
                </div>
                <div>
                  <div className="font-semibold">Sarah Kim</div>
                  <div className="text-sm text-gray-500">Volunteer, City Hope Network</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl relative">
              <div className="text-6xl text-white/10 absolute top-6 left-6 font-serif">"</div>
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                The clarity and coordination Kairos provides is game-changing. We're no longer scrambling—we're strategic. And that means more lives touched, more Gospel conversations, more kingdom impact.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-semibold">
                  DR
                </div>
                <div>
                  <div className="font-semibold">David Rodriguez</div>
                  <div className="text-sm text-gray-500">Executive Pastor, Cornerstone Church</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Not Ready Yet? That's Okay.</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            We understand that joining something new takes discernment and prayer. Explore our vision, see how Kairos works, or connect with our team to ask questions. There's no pressure—just clarity and support when you're ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#vision" 
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all font-medium"
            >
              Explore Our Vision
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all font-medium"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">About Kairos</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#vision" className="text-gray-400 hover:text-gray-200 transition-colors">Our Vision</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-gray-200 transition-colors">Mission & Values</a></li>
                <li><a href="#story" className="text-gray-400 hover:text-gray-200 transition-colors">Our Story</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-gray-200 transition-colors">Team</a></li>
              </ul>
            </div>

            {/* Get Started Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Get Started</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#individuals" className="text-gray-400 hover:text-gray-200 transition-colors">For Individuals</a></li>
                <li><a href="#organizations" className="text-gray-400 hover:text-gray-200 transition-colors">For Organizations</a></li>
                <li><a href="#leaders" className="text-gray-400 hover:text-gray-200 transition-colors">For Leaders</a></li>
                <li><a href="#dashboard" className="text-gray-400 hover:text-gray-200 transition-colors">Dashboard</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#guides" className="text-gray-400 hover:text-gray-200 transition-colors">User Guides</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-gray-200 transition-colors">Blog</a></li>
                <li><a href="#support" className="text-gray-400 hover:text-gray-200 transition-colors">Support</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-gray-200 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#contact" className="text-gray-400 hover:text-gray-200 transition-colors">Contact Us</a></li>
                <li><a href="#newsletter" className="text-gray-400 hover:text-gray-200 transition-colors">Newsletter</a></li>
                <li><a href="#prayer" className="text-gray-400 hover:text-gray-200 transition-colors">Prayer Requests</a></li>
                <li><a href="#partner" className="text-gray-400 hover:text-gray-200 transition-colors">Partner With Us</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>&copy; 2026 Kairos. Built to glorify God and serve His Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KairosHomepage;