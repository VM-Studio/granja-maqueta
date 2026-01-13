import Image from 'next/image';

export default function Contact() {
  const contactMethods = [
    {
      name: "WhatsApp",
      description: "Envianos un mensaje",
      cta: "Chatear ahora",
      image: "/wpp.png",
      href: "https://wa.me/5491112345678",
      external: true
    },
    {
      name: "Teléfono",
      description: "Llamanos directamente",
      cta: "(011) 1234-5678",
      image: "/telefono.png",
      href: "tel:+541112345678",
      external: false
    },
    {
      name: "Local Comercial",
      description: "También atendemos en el local",
      cta: "Visitanos",
      image: "/local.png",
      href: "#",
      external: false
    }
  ];

  return (
    <section id="contacto" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ee920f]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ee920f]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-wide">
            <span className="text-[#2f1f1c]">Hacé Tu Pedido </span>
            <span className="bg-gradient-to-r from-[#ee920f] to-[#d68310] bg-clip-text text-transparent">Ahora Mismo</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Elegí el método que prefieras y empezá a disfrutar de productos frescos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ee920f]/30 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ee920f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-5 mx-auto group-hover:scale-110 transition-all duration-300">
                  <Image 
                    src={method.image} 
                    alt={method.name}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#2f1f1c] mb-2 group-hover:text-[#ee920f] transition-colors">
                  {method.name}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {method.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[#ee920f] font-bold">
                  {method.cta}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Horarios - Modern Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 overflow-hidden">            
            <div className="relative z-10">
              <div className="text-center mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-black text-[#2f1f1c] mb-1">
                  Horarios de Atención
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">Estamos para atenderte</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-orange-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-orange-100/50 text-center">
                  <p className="font-bold text-[#2f1f1c] text-xs sm:text-sm mb-1">Lunes a Sábado</p>
                  <p className="text-base sm:text-lg font-black text-[#ee920f]">8:00 - 20:00</p>
                </div>
                <div className="bg-orange-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-orange-100/50 text-center">
                  <p className="font-bold text-[#2f1f1c] text-xs sm:text-sm mb-1">Domingos</p>
                  <p className="text-base sm:text-lg font-black text-[#ee920f]">9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
