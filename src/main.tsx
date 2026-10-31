import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
(window as unknown as { __REACT_MOUNTED__?: boolean }).__REACT_MOUNTED__ = true;
