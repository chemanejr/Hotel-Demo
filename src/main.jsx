import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookingProvider } from './context/BookingContext'

import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <BookingProvider>
                <App />
            </BookingProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
