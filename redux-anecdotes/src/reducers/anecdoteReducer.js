import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return state.map(anecdote => 
        anecdote.id !== action.payload.id ? anecdote : action.payload
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

const { appendAnecdote, setAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1}
    const updatedAnecdote = await anecdoteService.update(votedAnecdote)
    dispatch(setAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer