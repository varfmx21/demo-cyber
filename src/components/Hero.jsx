const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyber-blue-900 via-cyber-blue-800 to-cyber-teal-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyber-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-white">CyberGuard</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-200 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
            Automate Your Cybersecurity,
            <span className="block text-cyber-teal-400 mt-2">Protect Your Business</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade security made simple for small businesses. Continuous monitoring, automated assessments, and clear compliance guidance—all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#get-started"
              className="w-full sm:w-auto px-8 py-4 bg-cyber-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyber-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/20">
            <p className="text-gray-300 text-sm sm:text-base mb-6">Trusted by small businesses to secure their future</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-75">
              <div className="text-white/80 font-semibold text-sm sm:text-base">SOC 2 Compliant</div>
              <div className="text-white/80 font-semibold text-sm sm:text-base">GDPR Ready</div>
              <div className="text-white/80 font-semibold text-sm sm:text-base">ISO 27001</div>
              <div className="text-white/80 font-semibold text-sm sm:text-base">HIPAA Aligned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-20 text-white" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
