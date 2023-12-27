import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './services/requests'
import { useNotificationDispatch } from './reducers/notificationReducer'

const App = () => {
  const notificationDispatch = useNotificationDispatch()

  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
    notificationDispatch({type: 'SET', payload: 'anecdote ' + anecdote.content + ' voted'})
    setTimeout(() => {
      notificationDispatch({type: 'SET', payload: ''})
    }, 5000)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  })

  if (result.isError) {
    return <p>anecdote service not available due to problems in server</p>
  }

  if (result.isLoading) {
    return <h3>Loading data ...</h3>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      { result.data.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
