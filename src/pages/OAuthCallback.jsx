import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

const OAuthCallback = () => {
    const [error, setError] = useState('');
    const { loginWithToken } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleCallback = async () => {
            const searchParams = new URLSearchParams(location.search);
            const token = searchParams.get('token');
            const urlError = searchParams.get('error');

            if (urlError) {
                setError(urlError);
                // Redirect to login after a short delay showing the error
                setTimeout(() => navigate('/login', { state: { error: urlError } }), 3000);
                return;
            }

            if (token) {
                // We need to implement loginWithToken in AuthContext to handle just a token
                const success = await loginWithToken(token);
                if (success) {
                    navigate('/dashboard', { replace: true });
                } else {
                    setError('Error verifying your Google session. Please try again.');
                    setTimeout(() => navigate('/login'), 3000);
                }
            } else {
                setError('No authentication token found.');
                setTimeout(() => navigate('/login'), 3000);
            }
        };

        handleCallback();
    }, [location, navigate, loginWithToken]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center">
                    {error ? (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <p className="text-sm text-red-700">{error}</p>
                            <p className="text-xs text-red-500 mt-2">Redirecting to login...</p>
                        </div>
                    ) : (
                        <div>
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <h2 className="text-xl font-medium text-gray-900">
                                Verificando tu inicio de sesión...
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Por favor espera un momento mientras configuramos tu acceso.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OAuthCallback;
