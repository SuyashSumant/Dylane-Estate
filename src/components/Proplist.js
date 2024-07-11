import React from 'react'
import Nav from './Nav'
import './Proplist.css'
import Proplistbox from './Proplistbox'


const Proplist = () => {
  return (
    <div>
        <Nav/>
        <div className="box">
          <Proplistbox/>
        </div>
        
       
    </div>
  )
}

export default Proplist
