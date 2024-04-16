import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const count = useSelector((state: RootState) => state.counter);
  console.log('>>> Check COUNT: ', count);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div>
        <h2> My Current count = {count.value}</h2>
        <div>
          <button className='mt-3 btn-success'>Increase + 1</button>
        </div>
      </div>
    </>
  );
}

export default App;
