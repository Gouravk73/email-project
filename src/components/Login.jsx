import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailInput=useRef();
    const PasswordInput=useRef();
    const navigate =useNavigate()

    const submitHandler =async (e) => {
        e.preventDefault();
        const email=emailInput.current.value ;
        const password=PasswordInput.current.value ;
          
            try{const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3nj_bUobX7NvwdKCpIb3QUm24_dlqbWk`,{
                method:"POST",
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true
                }),
                headers:{'content-type':'application/json'}
            })
            if(!res.ok){const data=await res.json()
                console.log(data.error.message)
                throw new Error(data.error.message)

            }
            const data=await res.json()
            localStorage.setItem("email",  data.email)
            localStorage.setItem("token",  data.idToken)
            console.log(data)
            navigate('/')

        }
            catch(e){
                alert(e)
            }
 

    }
  return (
    <div className='container-fluid  d-inline-block   d-flex justify-content-center align-items-center' style={{border:'1px solid red',height:'100vh'}}> 
        <div className='row  '>

            <div className="col p-5 text-center"style={{border:'1px solid black',borderRadius:'20px'}}>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={submitHandler}>
                    <div className='form-floating mb-3'>
                        <input type="email" className="form-control"   placeholder='abc@gmail.com'ref={emailInput} />
                        <label htmlFor="">name</label>

                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className="form-control"   placeholder='abc@ .com' ref={PasswordInput} />
                        <label htmlFor="">Password</label>

                    </div> 
                    <button className='btn btn-primary' >Login</button>
                </form>
                    <Link>Forget Password</Link>
                <hr />
                
            </div>
            <div className='row my-5 ' >
                    <button className='btn btn-success' onClick={()=>navigate('/signin')}>Don't Have an account   ? Sign Up</button>
                </div>
        </div>

    </div>
  )
}

export default Login