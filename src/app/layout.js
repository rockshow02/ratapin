import './globals.css'

export const metadata = {
  title: 'Ratapin',
  description: 'Tingkatkan Kualitas & Daya Tahan Atap Anda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}