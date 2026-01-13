import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#ee920f]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#ee920f]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2f1f1c] leading-[1.1] tracking-tight">
              Productos
              <span className="block bg-gradient-to-r from-[#ee920f] to-[#d68310] bg-clip-text text-transparent">
                Frescos
              </span>
              <span className="block">A Tu Puerta</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Emprendimiento familiar especializado en reparto de productos frescos. 
              <span className="font-semibold text-[#2f1f1c]"> Pollería, fiambrería y lácteos</span> de calidad directamente a tu hogar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <a 
                href="#contacto"
                className="group relative bg-gradient-to-r from-[#ee920f] to-[#d68310] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Hacer un Pedido
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d68310] to-[#ee920f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#productos"
                className="group border-2 border-[#2f1f1c] text-[#2f1f1c] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#2f1f1c] hover:text-white transition-all hover:-translate-y-1 text-center"
              >
                Ver Productos
              </a>
            </div>
          </div>

          {/* Visual Card - Modern Design */}
          <div className="relative hidden lg:block lg:-mt-16">
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ee920f] rounded-3xl rotate-12 opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#d68310] rounded-3xl -rotate-12 opacity-20 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Sello decorativo */}
              <div className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 w-28 h-28 lg:w-36 lg:h-36 z-0 opacity-90">
                <Image
                  src="/sello.png"
                  alt="Sello Granja"
                  width={144}
                  height={144}
                  className="object-contain rotate-12 w-full h-full"
                />
              </div>
              
              <div className="space-y-6 relative z-10">
                {[
                  { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", title: "Reparto a Domicilio", desc: "En todo el barrio" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Entrega Rápida", desc: "Productos frescos" },
                  { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Calidad Garantizada", desc: "Negocio familiar" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-all cursor-pointer">
                    <div className="bg-gradient-to-br from-[#ee920f] to-[#d68310] p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#2f1f1c] text-lg mb-1">{item.title}</p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                    <svg className="w-5 h-5 text-[#ee920f] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
