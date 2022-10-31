import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Routes/Routes';

function App() {
  const routers = router;

  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={routers}>

      </RouterProvider>
    </div>
  );
}

export default App;
