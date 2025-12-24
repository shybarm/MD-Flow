import './globals.css'

export const metadata = {
  title: 'MD-FLOW | AI Clinic Management',
  description: 'הדור הבא של ניהול הקליניקה',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
