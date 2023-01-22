import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Navigation from '@/components/Navigation'

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
    <Navigation />
    <Component {...pageProps} />
  </QueryClientProvider>
  )
}
