import './App.css'
import PostsList from './components/PostsList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='main-content'>
        <PostsList />
      </div>
    </QueryClientProvider>
  )
}

export default App
