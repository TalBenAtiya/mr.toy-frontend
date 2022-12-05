import { Route, Routes } from 'react-router-dom';
import { Home } from './views/home';
import './assets/css/main.scss'
import { AppHeader } from './cmps/app-header';
import { ToyApp } from './views/toy-app';
import { ToyEdit } from './views/toy-edit';
import { ToyDetails } from './views/toy-details';
import { About } from './views/about';
import { Dashboard } from './views/dashboard';
import { Signup } from './views/signup';


function App() {
  return (
    <div className="app">
      <AppHeader />
     <main className='main-container'>
      <Routes>
        <Route path='/toys/:toyId' element={<ToyDetails />} />
        <Route path='/edit/:toyId' element={<ToyEdit />} />
        <Route path='/edit' element={<ToyEdit />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/toys' element={<ToyApp />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
     </main>
    </div>
  )
}

export default App;
