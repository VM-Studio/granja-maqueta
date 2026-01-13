import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Pollería",
      description: "Pollos frescos de la mejor calidad para tu mesa",
      image: "/pollo.png",
      gradient: "from-orange-400 to-orange-600",
      size: 112,
      link: "/pollos",
    },
    {
      title: "Fiambrería",
      description: "Fiambres y embutidos seleccionados para todos los gustos",
      image: "/fiambres.png",
      gradient: "from-red-400 to-red-600",
      size: 128,
      link: "/fiambres",
    },
    {
      title: "Lácteos",
      description: "Leche, quesos y productos lácteos frescos del día",
      image: "/lacteos.png",
      gradient: "from-blue-400 to-blue-600",
      size: 128,
      link: "/lacteos",
    },
    {
      title: "Quesos",
      description: "Gran variedad de quesos para todos los paladares",
      image: "/queso.png",
      gradient: "from-yellow-400 to-yellow-600",
      size: 112,
      link: "/quesos",
    },
  ];

  return (
    <section id="productos" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white"></div>
      <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(238, 146, 15, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-[#2f1f1c]">Lo Mejor Para </span>
            <span className="bg-gradient-to-r from-[#ee920f] to-[#d68310] bg-clip-text text-transparent">Tu Mesa</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Ofrecemos una amplia variedad de productos frescos y de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <Link 
              key={index}
              href={product.link}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ee920f]/30 hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ee920f]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                {/* Icon with animated gradient */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={product.size}
                    height={product.size}
                    className="object-contain w-full h-full"
                  />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-[#2f1f1c] mb-2 sm:mb-3 text-center group-hover:text-[#ee920f] transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-3 sm:mb-4">
                  {product.description}
                </p>
                
                {/* CTA Arrow */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gradient-to-r from-[#ee920f] to-[#d68310]">
                    <svg className="w-5 h-5 text-[#ee920f] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
