import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Container } from 'reactstrap';
import OtpInput from 'react-otp-input';
import * as Constants from "environment";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";

import axios from 'axios';

export default function Signin() {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [otp, setOtp] = useState('');

    useEffect(() => {
        // check if tokens are stored in local storage
        const storedAccessToken = localStorage.getItem('access_token');
        const storedRefreshToken = localStorage.getItem('refresh_token');
        console.log(storedAccessToken, storedRefreshToken);
        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
        else {
            localStorage.setItem('access_token', '');
            localStorage.setItem('refresh_token', '');
        }
    }, []);
    useEffect(() => {
        // check if tokens are stored in local storage
        axios.post(Constants.server_url+"validate-otp", {email:"jamesbrown9995@outlook.com", otp:otp})
        .then(res => { 
            setAccessToken(res.data.access_token); 
            setRefreshToken(res.data.refreshToken);
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token); 
        })
        .catch(err => { })
          // save response to variable
    }, []);

    const handleLogin = async (username, password) => {
        try {
            // send login request to server
            const response = await axios.post('/api/login', { username, password });
            setAccessToken(response.data.access_token);
            setRefreshToken(response.data.refresh_token);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    };

    const handleRefreshToken = async () => {
        try {
            // send refresh token request to server
            const response = await axios.post('/api/refresh_token', { refresh_token: refreshToken });
            setAccessToken(response.data.access_token);
            localStorage.setItem('access_token', response.data.access_token);
        } catch (error) {
            console.error(error);
        }
    };

    const isAuthenticated = () => {
        return accessToken !== null;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            // check if access token has expired and refresh if necessary
            if (isAuthenticated()) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                axios.get('/api/some_secure_endpoint')
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            handleRefreshToken();
                        }
                    });
            }
            else{

            }
        }, 60000); // check every minute
        return () => clearInterval(intervalId);
    }, [accessToken, refreshToken]);

    return (
        // <Container>
        //     {/* {isAuthenticated() ?
        //         <button onClick={handleLogout}>Logout</button> :
        //         <LoginForm onLogin={handleLogin} />
        //     } */}

        // </Container>
        <div>
            <Navbar />
            <div className='signin-dashboard'>
                <Card className='otp-card'>
                    <CardHeader className='text-center'>
                        <h1>
                            Enter verification code
                        </h1>
                    </CardHeader>
                    <CardBody>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}