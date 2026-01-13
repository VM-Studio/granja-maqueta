import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ee920f] to-[#d68310] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur"></div>
                <Image
                  src="/logogranja.png"
                  alt="Logo Granja"
                  width={140}
                  height={70}
                  className="object-contain relative z-10 transition-transform group-hover:scale-105 w-28 h-14 sm:w-32 sm:h-16 lg:w-[140px] lg:h-[70px]"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="#inicio" 
              className="text-[#2f1f1c] hover:text-[#ee920f] transition-all font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-xl hover:bg-orange-50 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee920f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#productos" 
              className="text-[#2f1f1c] hover:text-[#ee920f] transition-all font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-xl hover:bg-orange-50 relative group"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee920f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#reparto" 
              className="text-[#2f1f1c] hover:text-[#ee920f] transition-all font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-xl hover:bg-orange-50 relative group"
            >
              Reparto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee920f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contacto" 
              className="text-[#2f1f1c] hover:text-[#ee920f] transition-all font-medium text-sm lg:text-base px-3 lg:px-4 py-2 rounded-xl hover:bg-orange-50 relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee920f] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="#contacto"
              className="group relative bg-gradient-to-r from-[#ee920f] to-[#d68310] text-white px-4 lg:px-6 xl:px-8 py-2.5 lg:py-3 xl:py-3.5 rounded-2xl font-semibold text-sm lg:text-base shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Pedí Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d68310] to-[#ee920f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-[#2f1f1c] hover:text-[#ee920f] p-2 rounded-xl hover:bg-orange-50 transition-all">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
