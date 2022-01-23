import {useState} from 'react';

const initialState = {
  products: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const products = (payload) => {
    setState({
      ...state,
      products: [payload]
    })
  }
}

export default useInitialState;