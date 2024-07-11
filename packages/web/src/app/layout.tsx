import type { Metadata } from 'next'

import { pretendard } from '@/ui/font'
import '@/ui/style/shadcn.css'

export const metadata: Metadata = {
  title: 'OTL',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
