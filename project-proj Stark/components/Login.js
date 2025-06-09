function Login({ onLogin }) {
    try {
        const [email, setEmail] = React.useState('admin@crm.com');
        const [password, setPassword] = React.useState('admin123');
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const user = login(email, password);
                if (user) {
                    onLogin(user);
                } else {
                    setError('Credenciales inválidas. Verifica tu email y contraseña.');
                }
            } catch (err) {
                setError('Error al conectar con el servidor');
            } finally {
                setIsLoading(false);
            }
        };

        return React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center p-4',
            'data-name': 'login-container',
            'data-file': 'components/Login.js'
        },
            React.createElement('div', {
                className: 'w-full max-w-md'
            },
                React.createElement('div', {
                    className: 'glass-effect rounded-2xl p-8 shadow-2xl fade-in'
                },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('div', {
                            className: 'w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4'
                        },
                            React.createElement('i', {
                                className: 'fas fa-chart-line text-3xl text-white'
                            })
                        ),
                        React.createElement('h1', {
                            className: 'text-3xl font-bold text-white mb-2'
                        }, 'CRM System'),
                        React.createElement('p', {
                            className: 'text-white text-opacity-80'
                        }, 'Ingresa a tu panel de control')
                    ),
                    React.createElement('form', {
                        onSubmit: handleSubmit,
                        className: 'space-y-6'
                    },
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'email',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'Correo electrónico',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('input', {
                                type: 'password',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'Contraseña',
                                className: 'w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
                                required: true
                            })
                        ),
                        error && React.createElement('div', {
                            className: 'bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 text-white p-3 rounded-lg text-sm'
                        }, error),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLoading,
                            className: 'w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50'
                        }, isLoading ? 'Ingresando...' : 'Iniciar Sesión')
                    )
                )
            )
        );

    } catch (error) {
        console.error('Login error:', error);
        reportError(error);
    }
}
