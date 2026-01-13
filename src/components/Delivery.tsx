export default function Delivery() {
  return (
    <section id="reparto" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            <span className="text-[#2f1f1c]">Reparto </span>
            <span className="bg-gradient-to-r from-[#ee920f] to-[#d68310] bg-clip-text text-transparent">a Domicilio</span>
          </h2>
        </div>

        {/* Timeline Horizontal */}
        <div className="relative max-w-6xl mx-auto">
          {/* Línea horizontal */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee920f] to-transparent hidden md:block"></div>
          
          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                step: 1, 
                title: "Hacé tu pedido", 
                desc: "Contactanos por teléfono o WhatsApp con tu lista de productos",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              },
              { 
                step: 2, 
                title: "Preparamos tu pedido", 
                desc: "Seleccionamos los mejores productos frescos para vos",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              },
              { 
                step: 3, 
                title: "Entregamos en tu domicilio", 
                desc: "Llevamos todo directamente a tu puerta el mismo día",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Número */}
                <div className="relative z-10 bg-white text-[#ee920f] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-light text-xl sm:text-2xl shadow-lg border border-[#ee920f]/30 mb-6 sm:mb-8">
                  {item.step}
                </div>

                {/* Contenido */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border-2 border-[#ee920f]/20 hover:border-[#ee920f]/50 transition-all hover:-translate-y-1 w-full">
                  <div className="bg-orange-50 p-3 sm:p-4 rounded-2xl inline-flex mb-3 sm:mb-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ee920f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-[#2f1f1c] mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div className="text-center mt-12 sm:mt-16">
            <a 
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ee920f] to-[#d68310] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl font-black text-base sm:text-xl hover:scale-105 transition-all shadow-2xl hover:shadow-orange-500/50"
            >
              Solicitar Reparto
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
