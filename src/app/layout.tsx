import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Layout } from "@/components"

const open_sans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard ecomerce",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
