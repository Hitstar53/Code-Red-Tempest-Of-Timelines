import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor1, persistor2 } from './contexts/store' // Import store and persistors
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor1}>
        {' '}
        {/* Wrap App with PersistGate for countup */}
        <PersistGate loading={null} persistor={persistor2}>
          {' '}
          {/* Wrap App with PersistGate for countdown */}
          <App />
        </PersistGate>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
