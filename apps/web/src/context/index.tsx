import { ReactQueryProvider } from './react-query'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
