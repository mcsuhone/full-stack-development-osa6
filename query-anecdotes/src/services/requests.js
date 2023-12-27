import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const createAnecdote = async(anecdote) => {
  console.log(anecdote)
  return await axios.post(baseUrl, anecdote).then(res => res.data)
}

export const updateAnecdote = async(updatedAnecdote) => {
  return await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
}