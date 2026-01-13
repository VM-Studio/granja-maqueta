import Image from 'next/image';
import Link from 'next/link';

export default function PollosPage() {
  const products = [
    { name: "Pollo Entero", price: "$X.XXX", desc: "Pollo fresco de granja" },
    { name: "Pechuga", price: "$X.XXX", desc: "Suprema de pechuga" },
    { name: "Pata y Muslo", price: "$X.XXX", desc: "Corte económico" },
    { name: "Alitas", price: "$X.XXX", desc: "Ideal para hornear" },
    { name: "Menudos", price: "$X.XXX", desc: "Corazón, hígado y molleja" },
    { name: "Milanesas", price: "$X.XXX", desc: "Listas para cocinar" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <Link href="/#productos" className="flex items-center gap-2 sm:gap-3 group">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#ee920f] group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-lg sm:text-xl font-bold text-[#2f1f1c]">Volver</span>
            </Link>
            <Image src="/logogranja.png" alt="Logo" width={100} height={50} className="object-contain w-20 h-10 sm:w-24 sm:h-12 lg:w-[100px] lg:h-[50px]" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white"></div>
        <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#ee920f]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="text-[#2f1f1c]">Pollos </span>
              <span className="bg-gradient-to-r from-[#ee920f] to-[#d68310] bg-clip-text text-transparent">y Aves</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Productos frescos de la mejor calidad. Pollos de granja criados naturalmente.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <div 
                key={i}
                className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ee920f]/30 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#ee920f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2f1f1c] mb-1 sm:mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                    {product.desc}
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-[#ee920f]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 max-w-2xl mx-auto border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-black text-[#2f1f1c] mb-3 sm:mb-4">
                ¿Querés hacer tu pedido?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Contactanos por WhatsApp o teléfono para consultar disponibilidad y precios actualizados
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://wa.me/5491112345678"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-lg"
                >
                  WhatsApp
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="tel:+541112345678"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ee920f] to-[#d68310] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-lg"
                >
                  Llamar
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
