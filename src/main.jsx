import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PersonalDashboard from './PersonalDashboard';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalDashboard />
  </StrictMode>
);
