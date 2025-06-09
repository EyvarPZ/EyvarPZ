function App() {
    try {
        const [currentUser, setCurrentUser] = React.useState(null);
        const [currentPage, setCurrentPage] = React.useState('dashboard');
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const user = getCurrentUser();
            setCurrentUser(user);
            setIsLoading(false);
        }, []);

        const handleLogin = (userData) => {
            setCurrentUser(userData);
            setCurrentPage('dashboard');
        };

        const handleLogout = () => {
            logout();
            setCurrentUser(null);
            setCurrentPage('dashboard');
        };

        const navigate = (page) => {
            setCurrentPage(page);
        };

        if (isLoading) {
            return (
                React.createElement('div', {
                    className: 'min-h-screen flex items-center justify-center'
                }, 
                React.createElement('div', {
                    className: 'animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent'
                }))
            );
        }

        if (!currentUser) {
            return React.createElement(Login, { onLogin: handleLogin });
        }

        return React.createElement(Layout, {
            currentUser,
            currentPage,
            onNavigate: navigate,
            onLogout: handleLogout
        });

    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center text-white'
        }, 'Error al cargar la aplicación');
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
