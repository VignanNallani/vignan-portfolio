import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vignan Nallani - Full Stack Developer & AI/ML Engineer',
  description: 'Portfolio of Vignan Nallani, a full-stack developer and AI/ML engineer from India. Open source contributor, Infosys alumnus, building real-time systems and ML pipelines.',
  openGraph: {
    title: 'Vignan Nallani - Full Stack Developer & AI/ML Engineer',
    description: 'Portfolio of Vignan Nallani, a full-stack developer and AI/ML engineer from India. Open source contributor, Infosys alumnus, building real-time systems and ML pipelines.',
    type: 'website',
    url: 'https://vignannallani.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vignan Nallani - Full Stack Developer & AI/ML Engineer',
    description: 'Portfolio of Vignan Nallani, a full-stack developer and AI/ML engineer from India.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-navy`}>
        {children}
      </body>
    </html>
  )
}
