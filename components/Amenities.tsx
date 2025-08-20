'use client'

import { motion } from 'framer-motion'
import { Wifi, Car, Utensils, Leaf, Mountain, Coffee, Flame, MapPin } from 'lucide-react'

export default function Amenities() {
  const amenities = [
    {
      icon: Wifi,
      title: 'WiFi Gratuito',
      description: 'Conexión a internet de alta velocidad en todas las cabañas.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Car,
      title: 'Estacionamiento',
      description: 'Estacionamiento privado y seguro para todos nuestros huéspedes.',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Utensils,
      title: 'Cocina Equipada',
      description: 'Cocinas completamente equipadas con todos los utensilios necesarios.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Leaf,
      title: 'Senderos Naturales',
      description: 'Más de 5km de senderos para explorar la naturaleza del bosque.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mountain,
      title: 'Vistas Panorámicas',
      description: 'Vistas espectaculares a las montañas desde todas las cabañas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Coffee,
      title: 'Café de Bienvenida',
      description: 'Café y té de cortesía para comenzar tu día perfectamente.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Flame,
      title: 'Chimeneas',
      description: 'Chimeneas de leña para crear un ambiente acogedor y cálido.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación Central',
      description: 'Ubicación privilegiada cerca de atracciones y servicios locales.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const activities = [
    'Senderismo y trekking',
    'Observación de aves',
    'Fotografía de naturaleza',
    'Paseos en bicicleta',
    'Pesca en el lago',
    'Parrillas al aire libre',
    'Yoga en la naturaleza',
    'Stargazing nocturno'
  ]

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Servicios y{' '}
            <span className="text-gradient">Comodidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos esforzamos por brindarte todo lo necesario para una estadía perfecta. 
            Desde comodidades básicas hasta experiencias únicas en la naturaleza.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${amenity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {amenity.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Activities List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
              Actividades Disponibles
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Disfruta de una amplia variedad de actividades al aire libre que te 
              permitirán conectar con la naturaleza y crear recuerdos inolvidables.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700">{activity}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Ver Todas las Actividades
            </motion.button>
          </motion.div>

          {/* Activities Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Actividades al aire libre"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">Experiencia Completa</p>
                    <p className="text-sm text-gray-600">Equipamiento incluido</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">100%</p>
                    <p className="text-xs text-gray-600">Gratuito</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Servicios Adicionales Disponibles
            </h3>
            <p className="text-gray-600 mb-6">
              Hacemos que tu estadía sea aún más especial con servicios personalizados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary-600">🚁</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Traslados</h4>
                <p className="text-sm text-gray-600">Desde y hacia el aeropuerto</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary-600">🍽️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Catering</h4>
                <p className="text-sm text-gray-600">Servicios de comida a domicilio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary-600">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Guías</h4>
                <p className="text-sm text-gray-600">Excursiones guiadas personalizadas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
