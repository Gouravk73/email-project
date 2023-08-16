import React from 'react'
import{AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
  return (
    <div className="container p-0 py-3">
        <div className='row'>
            <div className="col">
                <h1 onClick={()=>navigate('/')}>YaHoo mail</h1>
            </div>
            <div className='col'>
                <div className="form-group d-flex">

                    <input type="text" className='form-control'  />
                    <AiOutlineSearch size={'2rem'}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header