module.exports = function reducer(state= [], action = {}){
  switch (action.type){
    case 'SHIRT@ADD':
      return[
      ...state,
      {
      id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1,
      color: action.color,
      size: action.size,
      motto: action.motto
  }]
  case 'SHIRT@REMOVE':
      return state.filter( shirt => shirt.id !== action.id)
  default:
    return state

  }
}
