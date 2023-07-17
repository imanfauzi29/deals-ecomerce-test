import Sidebar from "./Sidebar"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="sm:ml-64 pt-10 px-5">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
