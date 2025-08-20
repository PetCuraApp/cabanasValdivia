'use client'

import { motion } from 'framer-motion'
import { Users, Bed, Mountain, Wifi, Car, Dog } from 'lucide-react'

export default function Cabins() {
  const cabins = [
    {
      id: 1,
      name: 'Cabaña del Bosque',
      description: 'Cabaña rústica de 2 dormitorios con vista al bosque y terraza privada.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      capacity: 4,
      bedrooms: 2,
      price: 45000,
      features: ['Vista al bosque', 'Terraza privada', 'Chimenea', 'Cocina equipada'],
      available: true
    },
    {
      id: 2,
      name: 'Cabaña de la Montaña',
      description: 'Cabaña moderna de 3 dormitorios con vistas panorámicas a las montañas.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      capacity: 6,
      bedrooms: 3,
      price: 65000,
      features: ['Vista panorámica', 'Jacuzzi', 'Sala de estar amplia', 'Garaje'],
      available: true
    },
    {
      id: 3,
      name: 'Cabaña del Lago',
      description: 'Cabaña acogedora de 1 dormitorio junto al lago, perfecta para parejas.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      capacity: 2,
      bedrooms: 1,
      price: 35000,
      features: ['Vista al lago', 'Muelle privado', 'Parrilla', 'Jardín'],
      available: false
    }
  ]

  const amenities = [
    { icon: Wifi, label: 'WiFi' },
    { icon: Car, label: 'Estacionamiento' },
    { icon: Dog, label: 'Mascotas' },
    { icon: Mountain, label: 'Senderos' }
  ]

  return (
    <section id="cabanas" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Nuestras{' '}
            <span className="text-gradient">Cabañas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada cabaña ha sido diseñada para brindarte la experiencia perfecta. 
            Desde acogedoras cabañas para parejas hasta espaciosas cabañas familiares.
          </p>
        </motion.div>

        {/* Amenities Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-6 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cabins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {!cabin.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">No Disponible</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${cabin.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
                  {cabin.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cabin.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{cabin.capacity} personas</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{cabin.bedrooms} dormitorios</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {cabin.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!cabin.available}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    cabin.available
                      ? 'btn-primary'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {cabin.available ? 'Reservar Ahora' : 'No Disponible'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-nature-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              ¿Necesitas una cabaña específica?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Contáctanos para consultas sobre disponibilidad y reservas especiales.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contactar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
