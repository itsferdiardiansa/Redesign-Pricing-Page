import { PropsWithChildren } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}