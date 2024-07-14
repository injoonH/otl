import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import Providers from '@/app/providers'
import { pretendard } from '@/ui/font'
import '@/ui/style/shadcn.css'

export const metadata: Metadata = {
  title: 'OTL',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-8LH4268166" />
    </html>
  )
}

export default RootLayout
