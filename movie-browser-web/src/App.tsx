import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import UsersPage from './pages/UsersPage'
import ProfileSelector from './features/profiles/ProfileSelector'
import BrowsePage from './pages/BrowsePage'
import './App.css'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profiles" replace />} />
      <Route path="/profiles" element={<ProfileSelector />} />
      
      <Route element={<AppLayout />}>
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default App
