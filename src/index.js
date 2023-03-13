import  React  from 'react'

// New Way
import { createRoot } from 'react-dom/client';

import App from './App'
import './index.css'

// Old Way
//import ReactDOM  from 'react-dom'

// Old way of creating a root
/* ReactDOM.render(
    <React.StrictMode>
			<App />
    </React.StrictMode>,
    document.getElementById('root')
) */


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
