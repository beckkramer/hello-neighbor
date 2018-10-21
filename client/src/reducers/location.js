const LocationReducer = function(state = null, action) {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.location
    default:
      return state;
  }
}

export default LocationReducer;