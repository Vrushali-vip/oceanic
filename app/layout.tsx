// import type { Metadata } from 'next'
// import './globals.css'
// import Script from 'next/script'
// import { ThemeProvider } from '@/components/theme-provider'

// export const metadata: Metadata = {
//   title: 'Oceanic Advisors',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({

//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
//           <Script
//             src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
//             strategy="afterInteractive"
//           />
//           <Script
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/simplex-noise.min.js"
//             strategy="beforeInteractive"
//           />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Oceanic Advisors',
  description: 'Created with v0',
  generator: 'v0.dev',
  keywords: ['maritime', 'logistics', 'oceanic advisors', 'shipping', 'compliance'],
  authors: [{ name: 'Oceanic Advisors', url: 'https://oceanicadvisors.org' }],
  openGraph: {
    title: 'Oceanic Advisors',
    description: 'End-to-end technical supervision, compliance, and operational support for ship owners and managers worldwide.',
    url: 'https://oceanicadvisors.org',
    siteName: 'Oceanic Advisors',
    images: [
      {
        url: '/meta.png', 
        width: 1200,
        height: 630,
        alt: 'Oceanic Advisors',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oceanic Advisors',
    description: 'End-to-end technical supervision, compliance, and operational support for ship owners and managers worldwide.',
    images: ['/meta.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/simplex-noise.min.js"
            strategy="beforeInteractive"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}