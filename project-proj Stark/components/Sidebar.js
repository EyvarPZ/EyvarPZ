function Sidebar({ currentPage, onNavigate, isOpen }) {
    try {
        const menuItems = [
            { id: 'dashboard', name: 'Dashboard', icon: 'fas fa-chart-pie', color: 'text-blue-400' },
            { id: 'compras', name: 'Compras', icon: 'fas fa-shopping-cart', color: 'text-green-400' },
            { id: 'contactos', name: 'Contactos', icon: 'fas fa-users', color: 'text-purple-400' },
            { id: 'negocios', name: 'Negocios', icon: 'fas fa-handshake', color: 'text-yellow-400' },
            { id: 'tickets', name: 'Tickets', icon: 'fas fa-ticket-alt', color: 'text-red-400' }
        ];

        return React.createElement('aside', {
            className: `fixed left-0 top-0 h-full sidebar-gradient shadow-2xl transition-all duration-300 z-30 ${
                isOpen ? 'w-64' : 'w-16'
            }`,
            'data-name': 'sidebar',
            'data-file': 'components/Sidebar.js'
        },
            React.createElement('div', {
                className: 'p-6 border-b border-gray-600'
            },
                React.createElement('div', {
                    className: 'flex items-center space-x-3'
                },
                    React.createElement('div', {
                        className: 'w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center'
                    },
                        React.createElement('i', {
                            className: 'fas fa-chart-line text-white'
                        })
                    ),
                    isOpen && React.createElement('h1', {
                        className: 'text-xl font-bold text-white'
                    }, 'CRM System')
                )
            ),
            React.createElement('nav', {
                className: 'mt-6 px-3'
            },
                menuItems.map(item =>
                    React.createElement('button', {
                        key: item.id,
                        onClick: () => onNavigate(item.id),
                        className: `w-full flex items-center space-x-3 px-3 py-3 rounded-lg mb-2 transition-all duration-200 ${
                            currentPage === item.id 
                                ? 'bg-white bg-opacity-20 text-white' 
                                : 'text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white'
                        }`
                    },
                        React.createElement('i', {
                            className: `${item.icon} ${item.color} text-lg`
                        }),
                        isOpen && React.createElement('span', {
                            className: 'font-medium'
                        }, item.name)
                    )
                )
            )
        );

    } catch (error) {
        console.error('Sidebar error:', error);
        reportError(error);
    }
}
