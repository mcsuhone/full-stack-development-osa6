import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteList from './components/AnecdoteList.js'
import AnecdoteForm from './components/AnecdoteForm.js'
import Filter from './components/Filter.js'
import Notification from './components/Notification.js'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App