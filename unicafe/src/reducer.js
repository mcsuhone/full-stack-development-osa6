const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const changedState = {
    good: state.good,
    ok: state.ok,
    bad: state.bad,
  }
  switch (action.type) {
    case 'GOOD': {
      changedState.good += 1
      return changedState
    }
    case 'OK': {
      changedState.ok += 1
      return changedState
    }
    case 'BAD': {
      changedState.bad += 1
      return changedState
    }
    case 'ZERO': {
      changedState.good = 0
      changedState.ok = 0
      changedState.bad = 0
      return changedState
    }
    default: return state
  }
  
}

export default counterReducer
