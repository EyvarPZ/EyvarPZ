function Contactos() {
    try {
        const [contactos, setContactos] = React.useState([]);
        const [searchTerm, setSearchTerm] = React.useState('');
        const [showModal, setShowModal] = React.useState(false);

        React.useEffect(() => {
            loadContactos();
        }, []);

        const loadContactos = async () => {
            try {
                const result = await trickleListObjects('contacto', 50, true);
                setContactos(result.items || []);
            } catch (error) {
                console.error('Error loading contactos:', error);
            }
        };

        const sampleContactos = [
            { 
                id: 1, 
                nombre: 'Ana García', 
                email: 'ana.garcia@email.com', 
                telefono: '+1 (555) 123-4567', 
                empresa: 'Tech Solutions S.A.',
                cargo: 'Gerente de Compras',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
            },
            { 
                id: 2, 
                nombre: 'Carlos Mendoza', 
                email: 'carlos.mendoza@email.com', 
                telefono: '+1 (555) 987-6543', 
                empresa: 'Marketing Agency',
                cargo: 'Director Creativo',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
            },
            { 
                id: 3, 
                nombre: 'Laura Rodríguez', 
                email: 'laura.rodriguez@email.com', 
                telefono: '+1 (555) 456-7890', 
                empresa: 'Hardware Plus',
                cargo: 'Jefe de Ventas',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
            }
        ];

        const displayContactos = contactos.length > 0 ? contactos : sampleContactos;

        const filteredContactos = displayContactos.filter(contacto =>
            contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contacto.empresa.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return React.createElement('div', {
            className: 'space-y-6 fade-in',
            'data-name': 'contactos-page',
            'data-file': 'pages/Contactos.js'
        },
            React.createElement('div', {
                className: 'flex justify-between items-center'
            },
                React.createElement('div', null,
                    React.createElement('h1', {
                        className: 'text-3xl font-bold text-gray-900'
                    }, 'Gestión de Contactos'),
                    React.createElement('p', {
                        className: 'text-gray-600 mt-1'
                    }, 'Administra tu red de contactos empresariales')
                ),
                React.createElement('button', {
                    onClick: () => setShowModal(true),
                    className: 'btn-gradient text-white px-6 py-3 rounded-lg font-semibold'
                },
                    React.createElement('i', {
                        className: 'fas fa-user-plus mr-2'
                    }),
                    'Nuevo Contacto'
                )
            ),
            React.createElement('div', {
                className: 'bg-white p-4 rounded-lg shadow-sm border border-gray-100'
            },
                React.createElement('div', {
                    className: 'relative'
                },
                    React.createElement('i', {
                        className: 'fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                    }),
                    React.createElement('input', {
                        type: 'text',
                        placeholder: 'Buscar contactos...',
                        value: searchTerm,
                        onChange: (e) => setSearchTerm(e.target.value),
                        className: 'w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    })
                )
            ),
            React.createElement('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            },
                filteredContactos.map(contacto =>
                    React.createElement('div', {
                        key: contacto.id,
                        className: 'bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover'
                    },
                        React.createElement('div', {
                            className: 'flex items-center space-x-4 mb-4'
                        },
                            React.createElement('img', {
                                src: contacto.avatar,
                                alt: contacto.nombre,
                                className: 'w-12 h-12 rounded-full object-cover'
                            }),
                            React.createElement('div', {
                                className: 'flex-1'
                            },
                                React.createElement('h3', {
                                    className: 'font-semibold text-gray-900'
                                }, contacto.nombre),
                                React.createElement('p', {
                                    className: 'text-sm text-gray-600'
                                }, contacto.cargo),
                                React.createElement('p', {
                                    className: 'text-sm text-blue-600 font-medium'
                                }, contacto.empresa)
                            )
                        ),
                        React.createElement('div', {
                            className: 'space-y-2 mb-4'
                        },
                            React.createElement('div', {
                                className: 'flex items-center text-sm text-gray-600'
                            },
                                React.createElement('i', {
                                    className: 'fas fa-envelope mr-2 text-gray-400'
                                }),
                                contacto.email
                            ),
                            React.createElement('div', {
                                className: 'flex items-center text-sm text-gray-600'
                            },
                                React.createElement('i', {
                                    className: 'fas fa-phone mr-2 text-gray-400'
                                }),
                                contacto.telefono
                            )
                        ),
                        React.createElement('div', {
                            className: 'flex space-x-2'
                        },
                            React.createElement('button', {
                                className: 'flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium'
                            }, 'Contactar'),
                            React.createElement('button', {
                                className: 'flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium'
                            }, 'Editar')
                        )
                    )
                )
            ),
            React.createElement(Modal, {
                isOpen: showModal,
                onClose: () => setShowModal(false),
                title: 'Nuevo Contacto',
                size: 'md'
            },
                React.createElement('form', {
                    className: 'space-y-4'
                },
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Nombre'),
                            React.createElement('input', {
                                type: 'text',
                                className: 'mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Cargo'),
                            React.createElement('input', {
                                type: 'text',
                                className: 'mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            })
                        )
                    ),
                    React.createElement('div', null,
                        React.createElement('label', {
                            className: 'block text-sm font-medium text-gray-700'
                        }, 'Email'),
                        React.createElement('input', {
                            type: 'email',
                            className: 'mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        })
                    ),
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Teléfono'),
                            React.createElement('input', {
                                type: 'tel',
                                className: 'mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Empresa'),
                            React.createElement('input', {
                                type: 'text',
                                className: 'mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            })
                        )
                    ),
                    React.createElement('div', {
                        className: 'flex justify-end space-x-3 pt-4'
                    },
                        React.createElement('button', {
                            type: 'button',
                            onClick: () => setShowModal(false),
                            className: 'px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50'
                        }, 'Cancelar'),
                        React.createElement('button', {
                            type: 'submit',
                            className: 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                        }, 'Guardar')
                    )
                )
            )
        );

    } catch (error) {
        console.error('Contactos component error:', error);
        reportError(error);
    }
}
