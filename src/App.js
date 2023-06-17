import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/account';
import Home from './pages/home';
import Signin from './pages/signin';
import Navbar from './Component/navbar';
import Protected from './Component/Protected';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
    <AuthContextProvider>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/account' element={<Protected><Account/></Protected>}/>
     </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;