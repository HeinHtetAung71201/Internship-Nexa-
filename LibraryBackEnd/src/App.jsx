import React from 'react'
import './index.css'
import { Header } from './Components/Header'
// 
// import { Authors } from './Components/Authors'
import { AuthorList } from './Components/AuthorList'
// import { Categories } from './Components/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { IncBook } from './Components/IncBook'
import { BookList } from './Components/BookList'
import { CategoryList } from './Components/CategoryList'
// import { AuthenForm } from './Components/AuthenForm';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { AuthenForm } from './Components/AuthenForm';
// import { Book} from './Components/Book'

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<AuthenForm />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          
          <Route path='/authors' element={<AuthorList />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='/insert-book' element={<IncBook />} />
          <Route path='/bookList' element={<BookList/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
