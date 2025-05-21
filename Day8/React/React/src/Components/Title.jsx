import React, { useContext } from 'react'

import { MyContext } from '../Contexts/myContext';

function Title() {
    const tName = useContext(MyContext);
  return (
        <div>{tName}</div>
    )
}

export default Title