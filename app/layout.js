import './globals.css'

export const metadata = { title: 'They Krave For Me Radio', description: '24/7 Hip-Hop • R&B • Culture' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
