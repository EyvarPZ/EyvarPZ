function Tickets() {
    try {
        const [tickets, setTickets] = React.useState([]);
        const [showModal, setShowModal] = React.useState(false);
        const [selectedTicket, setSelectedTicket] = React.useState(null);

        React.useEffect(() => {
            loadTickets();
        }, []);

        const loadTickets = async () => {
            try {
                const result = await trickleListObjects('ticket', 50, true);
                setTickets(result.items || []);
            } catch (error) {
                console.error('Error loading tickets:', error);
            }
        };

        const sampleTickets = [
            { id: 1001, titulo: 'Error en sistema de facturación', cliente: 'Tech Solutions S.A.', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-15', asignado: 'Juan Pérez' },
            { id: 1002, titulo: 'Solicitud de nueva funcionalidad', cliente: 'StartUp Inc.', prioridad: 'Media', estado: 'En Proceso', fecha: '2024-01-14', asignado: 'María García' },
            { id: 1003, titulo: 'Consulta sobre integración API', cliente: 'Manufacturing Corp', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-13', asignado: 'Carlos López' },
            { id: 1004, titulo: 'Problema de rendimiento', cliente: 'Retail Chain', prioridad: 'Alta', estado: 'En Proceso', fecha: '2024-01-12', asignado: 'Ana Rodríguez' }
        ];

        const displayTickets = tickets.length > 0 ? tickets : sampleTickets;

        const getPriorityColor = (prioridad) => {
            switch (prioridad) {
                case 'Alta': return 'bg-red-100 text-red-800';
                case 'Media': return 'bg-yellow-100 text-yellow-800';
                case 'Baja': return 'bg-green-100 text-green-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        };

        const getStatusColor = (estado) => {
            switch (estado) {
                case 'Abierto': return 'bg-red-100 text-red-800';
                case 'En Proceso': return 'bg-blue-100 text-blue-800';
                case 'Cerrado': return 'bg-green-100 text-green-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        };

        const handleViewTicket = (ticket) => {
            setSelectedTicket(ticket);
            setShowModal(true);
        };

        return React.createElement('div', {
            className: 'space-y-6 fade-in',
            'data-name': 'tickets-page',
            'data-file': 'pages/Tickets.js'
        },
            React.createElement('div', {
                className: 'flex justify-between items-center'
            },
                React.createElement('div', null,
                    React.createElement('h1', {
                        className: 'text-3xl font-bold text-gray-900'
                    }, 'Centro de Soporte'),
                    React.createElement('p', {
                        className: 'text-gray-600 mt-1'
                    }, 'Gestiona tickets y brinda soporte excepcional')
                ),
                React.createElement('button', {
                    className: 'btn-gradient text-white px-6 py-3 rounded-lg font-semibold'
                },
                    React.createElement('i', {
                        className: 'fas fa-ticket-alt mr-2'
                    }),
                    'Nuevo Ticket'
                )
            ),
            React.createElement('div', {
                className: 'grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'
            },
                [
                    { label: 'Total Tickets', value: displayTickets.length, color: 'bg-blue-50 text-blue-600' },
                    { label: 'Abiertos', value: displayTickets.filter(t => t.estado === 'Abierto').length, color: 'bg-red-50 text-red-600' },
                    { label: 'En Proceso', value: displayTickets.filter(t => t.estado === 'En Proceso').length, color: 'bg-yellow-50 text-yellow-600' },
                    { label: 'Cerrados', value: displayTickets.filter(t => t.estado === 'Cerrado').length, color: 'bg-green-50 text-green-600' }
                ].map((stat, index) =>
                    React.createElement('div', {
                        key: index,
                        className: `${stat.color} p-4 rounded-lg`
                    },
                        React.createElement('p', {
                            className: 'text-sm font-medium opacity-75'
                        }, stat.label),
                        React.createElement('p', {
                            className: 'text-2xl font-bold'
                        }, stat.value)
                    )
                )
            ),
            React.createElement('div', {
                className: 'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'
            },
                React.createElement('div', {
                    className: 'px-6 py-4 border-b border-gray-200 bg-gray-50'
                },
                    React.createElement('h2', {
                        className: 'text-lg font-semibold text-gray-900'
                    }, 'Tickets de Soporte')
                ),
                React.createElement('div', {
                    className: 'overflow-x-auto'
                },
                    React.createElement('table', {
                        className: 'w-full'
                    },
                        React.createElement('thead', {
                            className: 'bg-gray-50'
                        },
                            React.createElement('tr', null,
                                ['ID', 'Título', 'Cliente', 'Prioridad', 'Estado', 'Asignado', 'Fecha', 'Acciones'].map(header =>
                                    React.createElement('th', {
                                        key: header,
                                        className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                                    }, header)
                                )
                            )
                        ),
                        React.createElement('tbody', {
                            className: 'divide-y divide-gray-200'
                        },
                            displayTickets.map(ticket =>
                                React.createElement('tr', {
                                    key: ticket.id,
                                    className: 'hover:bg-gray-50 transition-colors'
                                },
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm font-medium text-gray-900'
                                    }, `#${ticket.id}`),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-900'
                                    }, ticket.titulo),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, ticket.cliente),
                                    React.createElement('td', {
                                        className: 'px-6 py-4'
                                    },
                                        React.createElement('span', {
                                            className: `status-badge ${getPriorityColor(ticket.prioridad)}`
                                        }, ticket.prioridad)
                                    ),
                                    React.createElement('td', {
                                        className: 'px-6 py-4'
                                    },
                                        React.createElement('span', {
                                            className: `status-badge ${getStatusColor(ticket.estado)}`
                                        }, ticket.estado)
                                    ),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, ticket.asignado),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, ticket.fecha),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm'
                                    },
                                        React.createElement('button', {
                                            onClick: () => handleViewTicket(ticket),
                                            className: 'text-blue-600 hover:text-blue-800 mr-3'
                                        }, 'Ver'),
                                        React.createElement('button', {
                                            className: 'text-green-600 hover:text-green-800'
                                        }, 'Editar')
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(Modal, {
                isOpen: showModal,
                onClose: () => setShowModal(false),
                title: `Ticket #${selectedTicket?.id}`,
                size: 'lg'
            },
                selectedTicket && React.createElement('div', {
                    className: 'space-y-6'
                },
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Cliente'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm text-gray-900'
                            }, selectedTicket.cliente)
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Asignado a'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm text-gray-900'
                            }, selectedTicket.asignado)
                        )
                    ),
                    React.createElement('div', null,
                        React.createElement('label', {
                            className: 'block text-sm font-medium text-gray-700'
                        }, 'Título'),
                        React.createElement('p', {
                            className: 'mt-1 text-sm text-gray-900'
                        }, selectedTicket.titulo)
                    ),
                    React.createElement('div', {
                        className: 'grid grid-cols-3 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Prioridad'),
                            React.createElement('span', {
                                className: `status-badge ${getPriorityColor(selectedTicket.prioridad)} mt-1`
                            }, selectedTicket.prioridad)
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Estado'),
                            React.createElement('span', {
                                className: `status-badge ${getStatusColor(selectedTicket.estado)} mt-1`
                            }, selectedTicket.estado)
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Fecha'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm text-gray-900'
                            }, selectedTicket.fecha)
                        )
                    )
                )
            )
        );

    } catch (error) {
        console.error('Tickets component error:', error);
        reportError(error);
    }
}
