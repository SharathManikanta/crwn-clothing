import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/sign-up.component';
import './sign-in-and-sign-up-page.style.scss';

const SignInAndSignUpPage = () =>
(
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>

)
export default SignInAndSignUpPage;