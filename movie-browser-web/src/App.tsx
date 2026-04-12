import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import UsersPage from './pages/UsersPage'
import ProfileSelector from './features/profiles/ProfileSelector'
import BrowsePage from './pages/BrowsePage'
import SearchPage from './pages/SearchPage'
import ErrorBoundary from './components/ui/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Navigate to="/profiles" replace />} />
        <Route path="/profiles" element={<ProfileSelector />} />

        <Route element={<AppLayout />}>
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
