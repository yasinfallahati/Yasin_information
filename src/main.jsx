import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './contact.css';
import App from './App';
import { mountBackground } from './background';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
mountBackground();
