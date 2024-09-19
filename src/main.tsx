import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'
import { persistor, store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* redux provider */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* stripe provider */}
        <Elements stripe={stripePromise}>
          {/* route provider */}
          <RouterProvider router={router} />
        </Elements>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
