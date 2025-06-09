function Header({ currentUser, onLogout, onToggleSidebar }) {
    try {
        return React.createElement('header', {
            className: 'bg-white shadow-sm border-b border-gray-200 px-6 py-4',
            'data-name': 'header',
            'data-file': 'components/Header.js'
        },
            React.createElement('div', {
                className: 'flex items-center justify-between'
            },
                React.createElement('div', {
                    className: 'flex items-center space-x-4'
                },
                    React.createElement('button', {
                        onClick: onToggleSidebar,
                        className: 'p-2 rounded-lg hover:bg-gray-100 transition-colors'
                    },
                        React.createElement('i', {
                            className: 'fas fa-bars text-gray-600'
                        })
                    ),
                    React.createElement('h2', {
                        className: 'text-xl font-semibold text-gray-800'
                    }, 'Panel de Control')
                ),
                React.createElement('div', {
                    className: 'flex items-center space-x-4'
                },
                    React.createElement('button', {
                        className: 'p-2 rounded-lg hover:bg-gray-100 transition-colors relative'
                    },
                        React.createElement('i', {
                            className: 'fas fa-bell text-gray-600'
                        }),
                        React.createElement('span', {
                            className: 'absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'
                        })
                    ),
                    React.createElement('div', {
                        className: 'flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors'
                    },
                        React.createElement('img', {
                            src: currentUser.avatar,
                            alt: currentUser.name,
                            className: 'w-8 h-8 rounded-full object-cover'
                        }),
                        React.createElement('div', {
                            className: 'text-left'
                        },
                            React.createElement('p', {
                                className: 'text-sm font-medium text-gray-900'
                            }, currentUser.name),
                            React.createElement('p', {
                                className: 'text-xs text-gray-500'
                            }, currentUser.role)
                        )
                    ),
                    React.createElement('button', {
                        onClick: onLogout,
                        className: 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                    },
                        React.createElement('i', {
                            className: 'fas fa-sign-out-alt mr-2'
                        }),
                        'Salir'
                    )
                )
            )
        );

    } catch (error) {
        console.error('Header error:', error);
        reportError(error);
    }
}
