import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseConfig } from "../Constants";
import { initializeApp } from "firebase/app";

function ResetPassword() {

  const [email, setEmail] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const resetPassword = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email).then((userCredential) => {
      alert('Password reset email sent! Check your inbox.');
      const user = userCredential.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode === 'auth/invalid-email') {
        alert('This email is invalid.');
      } else if (errorCode === 'auth/user-not-found') {
        alert('This email is not registered. Please sign up.');
      }
    });
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Forgot your password?</h1>
                <p className="text-xl text-gray-400">We'll email you instructions on how to reset it.</p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={resetPassword}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" value={email} onChange={handleEmailChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default ResetPassword;