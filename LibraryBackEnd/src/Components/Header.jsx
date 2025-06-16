import React from 'react'
// import avatar from '../imgs/mf-avatar.svg';

export const Header = () => {
  return (
   <header className='w-full z-50 bg-[#1b242f] justify-evenly sticky top-0 border-b-emerald-600' style={{padding:'10px'}}>
        <div className='w-full px-5 flex  items-center justify-around'>
            <div className="nav">
                <div className="w-xl text-white contentBox" id="navbarSupportedContent">
                        <ul className="flex justify-between">
                            <li className="">
                                <a className=" uppercase" href="/">Authors</a>
                            </li>

                            <li className="">
                                <a className=" uppercase createline" href="/categories">Categories</a>
                            </li>

                            <li className="">
                                <a className=" uppercase" href="/insert-book">Insert New Book</a>
                            </li>

                            <li className="">
                                <a className=" uppercase" href="/booklist">Books</a>
                            </li> 
                        </ul>
                    </div>
            </div>
        </div>
   </header>
  )
}
