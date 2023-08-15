import React, { useRef } from 'react'
import { Button, Card } from 'react-bootstrap'

const SignIn = () => {
    const emailInput=useRef();
    const PasswordInput=useRef();
    const confirmPasswordInput=useRef();


    const submitHandler =async (e) => {
        e.preventDefault();
        const email=emailInput.current.value ;
        const password=PasswordInput.current.value ;
        const confirmPassword=confirmPasswordInput.current.value ;
        if(confirmPassword!==password) {
            alert('password not match')
            return 
        }
        else{
            try{const res=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3nj_bUobX7NvwdKCpIb3QUm24_dlqbWk`,{
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
            console.log(data)
        }
            catch(e){
                alert(e)
            }
        }

    }
  return (
    <div className='container-fluid  d-inline-block   d-flex justify-content-center align-items-center' style={{border:'1px solid red',height:'100vh'}}> 
        <div className='row  '>

            <div className="col p-5"style={{border:'1px solid black',borderRadius:'20px'}}>
                <h1 className='text-center'>Sign Up</h1>
                <form onSubmit={submitHandler}>
                    <div className='form-floating mb-3'>
                        <input type="email" className="form-control"   placeholder='abc@gmail.com'ref={emailInput} />
                        <label htmlFor="">name</label>

                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className="form-control"   placeholder='abc@ .com' ref={PasswordInput} />
                        <label htmlFor="">name</label>

                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className="form-control"  placeholder='abc@gmail.com'ref={confirmPasswordInput} />
                        <label htmlFor="">Confirm Password</label>

                    </div>
                    <button className='btn btn-primary' >submit</button>
                </form>
                <hr />
                <div className='row mb-3'>
                    <button className='btn btn-success'>Have an account already ?</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignIn