import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restaurant Food Cost Calculator',
  description: 'Calculate real food costs and menu profitability. Input recipes and ingredient costs, track price changes and calculate true dish profitability.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="48af90f7-0673-471e-8396-94c8b9fffc6d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
