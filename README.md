# 🏡 Cabañas del Bosque - Landing Page

Un sitio web moderno y responsive para arriendo de cabañas, construido con Next.js, TypeScript y Tailwind CSS.

## ✨ Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Animaciones Modernas**: Utilizando Framer Motion para transiciones suaves
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **SEO Optimizado**: Metadatos y estructura semántica
- **Performance**: Lazy loading y optimizaciones de imagen
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesamiento de CSS

## 📁 Estructura del Proyecto

```
landingPageCabañas/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/               # Componentes reutilizables
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero
│   ├── About.tsx            # Información sobre las cabañas
│   ├── Cabins.tsx           # Lista de cabañas disponibles
│   ├── Amenities.tsx        # Servicios y comodidades
│   ├── Gallery.tsx          # Galería de imágenes
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
├── public/                   # Archivos estáticos
├── package.json             # Dependencias del proyecto
├── tailwind.config.js       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd landingPageCabañas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Azules para elementos principales
- **Nature**: Verdes para elementos naturales
- **Wood**: Marrones para elementos rústicos

### Fuentes
- **Inter**: Fuente principal para texto
- **Playfair Display**: Fuente serif para títulos

### Imágenes
Las imágenes están configuradas para usar Unsplash. Puedes cambiar las URLs en los componentes correspondientes.

## 🚀 Despliegue en Vercel

1. **Conectar repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Selecciona el proyecto

2. **Configuración automática**
   - Vercel detectará automáticamente que es un proyecto Next.js
   - El build se ejecutará automáticamente

3. **Variables de entorno** (si es necesario)
   - Agrega variables de entorno en la configuración del proyecto
   - Reconstruye el proyecto

## 📝 Componentes Principales

### Header
- Navegación responsive
- Cambio de estilo al hacer scroll
- Menú móvil con animaciones

### Hero
- Imagen de fondo con overlay
- Texto llamativo y botones de acción
- Indicador de scroll animado

### Cabins
- Grid de cabañas disponibles
- Información detallada de cada cabaña
- Estados de disponibilidad

### Gallery
- Filtros por categoría
- Lightbox para ver imágenes
- Navegación entre imágenes

### Contact
- Formulario de contacto completo
- Validación de campos
- Estados de envío

## 🔧 Configuración Adicional

### Google Analytics
Para agregar Google Analytics, crea un archivo `lib/gtag.ts` y agrega el script en `layout.tsx`.

### Formularios
El formulario de contacto está configurado para simular envío. Para funcionalidad real, integra con servicios como:
- Formspree
- Netlify Forms
- API personalizada

### Mapas
Para integrar mapas reales, reemplaza el placeholder en `Contact.tsx` con:
- Google Maps
- Mapbox
- OpenStreetMap

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accesibilidad

- Navegación por teclado
- Etiquetas ARIA apropiadas
- Contraste de colores optimizado
- Texto alternativo en imágenes

## 🚀 Optimizaciones de Performance

- Lazy loading de componentes
- Optimización de imágenes
- Bundle splitting automático
- Prefetch de enlaces

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Email: info@cabanasdelbosque.cl
- Teléfono: +56 9 1234 5678

---

**Desarrollado con ❤️ para Cabañas del Bosque**
