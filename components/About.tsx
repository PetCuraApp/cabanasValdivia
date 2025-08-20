'use client'

import { motion } from 'framer-motion'
import { Leaf, Mountain, Heart, Star } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Naturaleza Pura',
      description: 'Rodeadas de bosques nativos y senderos naturales para explorar.'
    },
    {
      icon: Mountain,
      title: 'Vistas Panorámicas',
      description: 'Disfruta de impresionantes vistas a las montañas y valles.'
    },
    {
      icon: Heart,
      title: 'Experiencia Única',
      description: 'Cada cabaña está diseñada para brindar confort y privacidad.'
    },
    {
      icon: Star,
      title: 'Calidad Premium',
      description: 'Materiales de primera calidad y atención al detalle.'
    }
  ]

  return (
    <section className="section-padding bg-gradient-nature">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Bienvenidos a{' '}
            <span className="text-gradient">Cabañas del Bosque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un refugio perfecto para escapar de la rutina diaria y reconectar con la naturaleza. 
            Nuestras cabañas combinan el encanto rústico con todas las comodidades modernas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-semibold text-gray-800">
              Tu Escape Perfecto en la Naturaleza
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ubicadas en el corazón de un bosque centenario, nuestras cabañas ofrecen 
              la combinación perfecta de tranquilidad, aventura y confort. Cada detalle 
              ha sido cuidadosamente pensado para que tu estadía sea inolvidable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde senderos para caminar hasta terrazas privadas con vistas espectaculares, 
              cada momento aquí te conectará con la belleza natural que te rodea.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">WiFi gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Estacionamiento</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Mascotas bienvenidas</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Interior de cabaña"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">+500</p>
                  <p className="text-sm text-gray-600">Huéspedes felices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
