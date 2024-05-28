import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import Contato from './pages/contato/index.tsx'
import Tarefa from './pages/tarefas/index.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound />},
  { path: '/sobre', element: <Sobre />}, 
  { path: '/contato', element: <Contato />},
  { path: '/tarefa', element: <Tarefa />}


])

export default router