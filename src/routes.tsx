import { Route, Routes } from 'react-router-dom'
import { CustomLayout } from './components/CustomLayout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { Editor } from './components/Editor.tsx'

export const routs = (
  <Routes>
    <Route path="/" element={<CustomLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/people/:peopleId" element={<Editor />} />
      <Route path="*" element={'Error'} />
    </Route>
  </Routes>
)
