function Layout({ currentUser, currentPage, onNavigate, onLogout }) {
    try {
        const [sidebarOpen, setSidebarOpen] = React.useState(true);

        const renderPage = () => {
            switch (currentPage) {
                case 'compras':
                    return React.createElement(Compras);
                case 'contactos':
                    return React.createElement(Contactos);
                case 'negocios':
                    return React.createElement(Negocios);
                case 'tickets':
                    return React.createElement(Tickets);
                default:
                    return React.createElement(Dashboard);
            }
        };

        return React.createElement('div', {
            className: 'min-h-screen bg-gray-50 flex',
            'data-name': 'layout',
            'data-file': 'components/Layout.js'
        },
            React.createElement(Sidebar, {
                currentPage,
                onNavigate,
                isOpen: sidebarOpen
            }),
            React.createElement('div', {
                className: `flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`
            },
                React.createElement(Header, {
                    currentUser,
                    onLogout,
                    onToggleSidebar: () => setSidebarOpen(!sidebarOpen)
                }),
                React.createElement('main', {
                    className: 'flex-1 p-6 overflow-auto bg-gray-50'
                }, renderPage())
            )
        );

    } catch (error) {
        console.error('Layout error:', error);
        reportError(error);
    }
}
