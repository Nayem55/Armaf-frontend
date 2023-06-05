import React, { useEffect, useState } from 'react';
import './Signup.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


const Signup = () => {
    const location = useLocation();
    const [userData,setUserData] = useState({})
    const [updateProfile] = useUpdateProfile(auth);
    const from = location.state?.from.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()

      useEffect(() => {
        if (user) {
          navigate(from, { replace: true });
          saveUser(userData);
        }
      }, [user]);

      if(loading){
        return 
      }


      const handleSignup=async(e)=>{
        e.preventDefault();
        const name = e.target.firstName.value + " " + e.target.lastName.value;
        const firstName = e.target.firstName.value;
        const lastName =  e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = {
          email: email,
          password:password,
          first_name: firstName,
          last_name: lastName,
          username: name,
          billing: {
            first_name: firstName,
            last_name: lastName,
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "Bangladesh",
            email: email,
            phone: ""
          },
          shipping: {
            first_name: firstName,
            last_name: lastName,
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "Bangladesh"
          }
        }
        setUserData(data);


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name});
      }


      const saveUser =(userData)=>{
        const data = userData;
        fetch('http://localhost:5000/postCustomer',{
          method: 'post',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      }


    return (
        <div className='2xl:w-[65%] md:w-[75%] w-[90%] mx-auto mb-20'>
            <div className='my-10'>
                <p className='text-[12px] font-semibold'>Home<FontAwesomeIcon className='mx-2' icon={faCaretRight}></FontAwesomeIcon>Create Account</p>
                <p className='text-xl my-4 font-bold'>CREATE AN ACCOUNT</p>
                <p className='text-[12px] font-semibold'>Sign up for a free account at Fragrance</p>
            </div>
            <form onSubmit={handleSignup}>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>First Name</p>
                    <input type="text" name='firstName' className='border px-3 py-2 border-secondary border-opacity-50 w-[80%] sm:w-[30vw]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>LAST NAME</p>
                    <input type="text" name='lastName' className='border px-3 py-2 border-secondary border-opacity-50 w-[80%] sm:w-[30vw]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>YOUR EMAIL ADDRESS</p>
                    <input type="email" name='email' required className='border px-3 py-2 border-secondary border-opacity-50 w-[80%] sm:w-[30vw]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>YOUR PASSWORD</p>
                    <input type="password" name='password' required className='border py-2 px-3 border-secondary border-opacity-50 w-[80%] sm:w-[30vw]' />
                </div>
                <p className='text-error mb-3 font-bold'>{error?.message}</p>
                <input type='submit' value="CREATE AN ACCOUNT" className='w-[200px] sm:w-[280px] bg-secondary text-primary px-4 py-2 text-sm font-bold cursor-pointer'/>
                <p className='text-[14px] font-semibold my-4'>Already have an account ? <Link to="/login" className='text-accent font-bold'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;