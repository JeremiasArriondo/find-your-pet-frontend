import { GoogleLogin } from 'react-google-login';


const LoginGoogle = () => {

    const responseGoogle = (r) => {
        console.log(r)
    }

    return (
        <>
            <GoogleLogin
                clientId="50345050855-jm9dk923v887mt87ad0v1a8lr9unelqs.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default LoginGoogle;