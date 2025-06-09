function Dashboard() {
    try {
        const stats = [
            { title: 'Total Compras', value: '1,234', icon: 'fas fa-shopping-cart', color: 'bg-blue-500' },
            { title: 'Contactos', value: '856', icon: 'fas fa-address-book', color: 'bg-green-500' },
            { title: 'Negocios Activos', value: '42', icon: 'fas fa-handshake', color: 'bg-purple-500' },
            { title: 'Tickets Abiertos', value: '18', icon: 'fas fa-ticket-alt', color: 'bg-red-500' }
        ];

        return React.createElement('div', {
            className: 'space-y-6 fade-in',
            'data-name': 'dashboard',
            'data-file': 'components/Dashboard.js'
        },
            React.createElement('div', {
                className: 'mb-8'
            },
                React.createElement('h1', {
                    className: 'text-3xl font-bold text-gray-900 mb-2'
                }, 'Dashboard'),
                React.createElement('p', {
                    className: 'text-gray-600'
                }, 'Resumen general de tu sistema CRM')
            ),
            React.createElement('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            },
                stats.map((stat, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'bg-white p-6 rounded-xl card-shadow hover-scale'
                    },
                        React.createElement('div', {
                            className: 'flex items-center justify-between'
                        },
                            React.createElement('div', null,
                                React.createElement('p', {
                                    className: 'text-sm font-medium text-gray-600'
                                }, stat.title),
                                React.createElement('p', {
                                    className: 'text-3xl font-bold text-gray-900 mt-2'
                                }, stat.value)
                            ),
                            React.createElement('div', {
                                className: `${stat.color} p-3 rounded-full`
                            },
                                React.createElement('i', {
                                    className: `${stat.icon} text-white text-xl`
                                })
                            )
                        )
                    )
                )
            ),
            React.createElement('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-6'
            },
                React.createElement('div', {
                    className: 'bg-white p-6 rounded-xl card-shadow'
                },
                    React.createElement('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-4'
                    }, 'Actividad Reciente'),
                    React.createElement('div', {
                        className: 'space-y-3'
                    },
                        React.createElement('div', {
                            className: 'flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
                        },
                            React.createElement('i', {
                                className: 'fas fa-shopping-cart text-blue-500'
                            }),
                            React.createElement('span', {
                                className: 'text-gray-700'
                            }, 'Nueva compra registrada - $1,250')
                        ),
                        React.createElement('div', {
                            className: 'flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
                        },
                            React.createElement('i', {
                                className: 'fas fa-user-plus text-green-500'
                            }),
                            React.createElement('span', {
                                className: 'text-gray-700'
                            }, 'Nuevo contacto agregado')
                        )
                    )
                ),
                React.createElement('div', {
                    className: 'bg-white p-6 rounded-xl card-shadow'
                },
                    React.createElement('h3', {
                        className: 'text-lg font-semibold text-gray-900 mb-4'
                    }, 'Accesos Rápidos'),
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-3'
                    },
                        React.createElement('button', {
                            className: 'p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center'
                        },
                            React.createElement('i', {
                                className: 'fas fa-plus text-blue-600 text-xl mb-2'
                            }),
                            React.createElement('p', {
                                className: 'text-blue-600 font-medium'
                            }, 'Nueva Compra')
                        ),
                        React.createElement('button', {
                            className: 'p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center'
                        },
                            React.createElement('i', {
                                className: 'fas fa-user-plus text-green-600 text-xl mb-2'
                            }),
                            React.createElement('p', {
                                className: 'text-green-600 font-medium'
                            }, 'Nuevo Contacto')
                        )
                    )
                )
            )
        );

    } catch (error) {
        console.error('Dashboard component error:', error);
        reportError(error);
    }
}
