import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdvice } from './redux/adviceSlice'
import Advice from './components/Advice'

function App() {
  const dispatch = useDispatch();
  const { adviceText, isLoading, error } = useSelector((state) => state.advice);

  useEffect(() => {
    dispatch(fetchAdvice());
  }, [dispatch]);

  const handleNewAdvice = () => {
    dispatch(fetchAdvice());
  };

  return (
    <Advice
      advice={adviceText}
      isLoading={isLoading}
      onFetchNew={handleNewAdvice}
      error={error}
    />
  )
}

export default App