import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

/**
 * Wraps a route so only authenticated users can access it.
 * Redirects to /login if not authenticated.
 */
export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
