import { useState } from 'react'

const initialState = {
  error: null,
  loading: false
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  // Reset state
}

export default useInitialState
