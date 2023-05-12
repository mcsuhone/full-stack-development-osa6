
import AnecdoteList from './components/AnecdoteList.js'
import AnecdoteForm from './components/AnecdoteForm.js'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App