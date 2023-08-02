import { FC, ReactNode } from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="p-12 relative bg-cover bg-no-repeat">{children}</div>
}

export default Layout
