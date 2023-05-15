import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer.js'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter.toLowerCase())
  const anecdotes = useSelector(state => state.anecdotes.filter(a => a.content.toLowerCase().includes(filter)).sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList