import './globals.css'

export const metadata = {
  title: 'Elite Consultancy - Strategic Business Solutions',
  description: 'Professional consultancy services for business transformation and growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}