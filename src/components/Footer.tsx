import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#2f1f1c] text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Image 
                src="/logogranjasinfondo.png" 
                alt="Granja Logo"
                width={160}
                height={80}
                className="object-contain w-32 h-16 sm:w-36 sm:h-[72px] lg:w-40 lg:h-20"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 max-w-md">
              Emprendimiento familiar dedicado al reparto de productos frescos. 
              <span className="text-white font-semibold"> Pollería, fiambrería y lácteos</span> de calidad para tu hogar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#ee920f] to-[#d68310] rounded-full"></div>
              Enlaces
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Productos", href: "#productos" },
                { name: "Reparto", href: "#reparto" },
                { name: "Contacto", href: "#contacto" }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-sm sm:text-base text-gray-400 hover:text-[#ee920f] transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 -translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-[#ee920f] to-[#d68310] rounded-full"></div>
              Contacto
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 group hover:text-white transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#ee920f] group-hover:to-[#d68310] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee920f] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Teléfono</p>
                  <p className="text-sm sm:text-base font-semibold">(011) 1234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 group hover:text-white transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#ee920f] group-hover:to-[#d68310] rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee920f] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">WhatsApp</p>
                  <p className="text-sm sm:text-base font-semibold">Enviar mensaje</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Granja</span>. Todos los derechos reservados. Emprendimiento familiar.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span>Hecho por</span>
              <span className="text-[#ee920f] font-bold">VM Studio Web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
