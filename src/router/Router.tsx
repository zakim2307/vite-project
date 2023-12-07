import { HomePage, ProjectPage } from '../pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/vite-project" element={<HomePage />} />
      <Route path="/vite-project/projects/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

export default Router