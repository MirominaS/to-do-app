import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import Home from './pages/home/Home'

function App() {
 return (
    <div className='app'>
      <Home/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  )
    
}

export default App
