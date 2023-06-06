import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { routs } from './routes.tsx'

export const App: FC = () => {
  return <ErrorBoundary fallback={<div>Something went wrong</div>}>{routs}</ErrorBoundary>
}
