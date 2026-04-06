import { createHashRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
