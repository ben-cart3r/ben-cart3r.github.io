import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="container">
      <header>
        <h1>Ben Carter</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
