import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectWithAuthToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authtoken');
    if (authToken) {
      // Redirect to /home page
      navigate('/home');
    }else{
        navigate('/login')
    }
  }, [navigate]);

  return <div>Redirecting</div>;
};

export default RedirectWithAuthToken;
