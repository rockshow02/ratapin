import './globals.css'

export const metadata = {
  title: '3D Coverflow - One Page Portfolio',
  description: 'A revolutionary way to showcase your visual content with stunning 3D effects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}