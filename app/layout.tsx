import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabañas del Bosque - Arriendo de Cabañas',
  description: 'Descubre nuestras hermosas cabañas en medio de la naturaleza. Perfectas para escapar de la rutina y conectar con la tranquilidad del bosque.',
  keywords: 'cabañas, arriendo, naturaleza, bosque, vacaciones, escapada',
  authors: [{ name: 'Cabañas del Bosque' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
