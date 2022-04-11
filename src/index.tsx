import { createRoot } from 'react-dom/client';
import './index.css';
import RouterConfig from './routes/Router';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<RouterConfig />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
