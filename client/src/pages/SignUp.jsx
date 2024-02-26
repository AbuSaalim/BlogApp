<<<<<<< HEAD
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
=======
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
<<<<<<< HEAD
      return setErrorMessage("Please fill out all fields.");
=======
      return setErrorMessage('Please fill out all fields.');
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
    }
    try {
      setLoading(true);
      setErrorMessage(null);
<<<<<<< HEAD
      setTimeout(() => {
        setLoading(false);
      }, 4000);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
=======
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
<<<<<<< HEAD
      if (res.ok) {
        navigate("/sign-in");
=======
      if(res.ok) {
        navigate('/sign-in');
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
<<<<<<< HEAD
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
=======
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

<<<<<<< HEAD
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
=======
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
                onChange={handleChange}
              />
            </div>
            <div>
<<<<<<< HEAD
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
=======
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
                onChange={handleChange}
              />
            </div>
            <div>
<<<<<<< HEAD
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
=======
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
                onChange={handleChange}
              />
            </div>
            <Button
<<<<<<< HEAD
              gradientDuoTone="purpleToPink"
              type="submit"
=======
              gradientDuoTone='purpleToPink'
              type='submit'
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
              disabled={loading}
            >
              {loading ? (
                <>
<<<<<<< HEAD
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
=======
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
<<<<<<< HEAD
            <Alert className="mt-5" color="failure">
=======
            <Alert className='mt-5' color='failure'>
>>>>>>> 8b5d9550ab9ac054cf33b53e6cc1e39818de34ac
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}