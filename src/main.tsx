import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storeDati } from './store/storeDati';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
     <Provider store={storeDati}>
        <App />
     </Provider>
	
  </React.StrictMode>
);
