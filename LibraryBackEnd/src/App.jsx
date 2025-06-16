import React from 'react'
import './index.css'
import { Header } from './Components/Header'
// 
import { Authors } from './Components/Authors'
import { AuthorList } from './Components/AuthorList'
import { Categories } from './Components/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { IncBook } from './Components/IncBook'
import { BookList } from './Components/BookList'
import { CategoryList } from './Components/CategoryList'


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<AuthorList />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='/insert-book' element={<IncBook />} />
          <Route path='/bookList' element={<BookList/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
