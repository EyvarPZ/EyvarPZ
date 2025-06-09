function Compras() {
    try {
        const [compras, setCompras] = React.useState([]);
        const [showModal, setShowModal] = React.useState(false);
        const [selectedCompra, setSelectedCompra] = React.useState(null);

        React.useEffect(() => {
            loadCompras();
        }, []);

        const loadCompras = async () => {
            try {
                const result = await trickleListObjects('compra', 50, true);
                setCompras(result.items || []);
            } catch (error) {
                console.error('Error loading compras:', error);
            }
        };

        const sampleCompras = [
            { id: 1, proveedor: 'Tech Solutions S.A.', monto: 15250, fecha: '2024-01-15', estado: 'Completada', categoria: 'Software' },
            { id: 2, proveedor: 'Office Supplies Corp', monto: 3850, fecha: '2024-01-14', estado: 'Pendiente', categoria: 'Oficina' },
            { id: 3, proveedor: 'Hardware Plus', monto: 28900, fecha: '2024-01-13', estado: 'Completada', categoria: 'Hardware' },
            { id: 4, proveedor: 'Marketing Agency', monto: 12500, fecha: '2024-01-12', estado: 'En Proceso', categoria: 'Marketing' }
        ];

        const displayCompras = compras.length > 0 ? compras : sampleCompras;

        const getStatusColor = (estado) => {
            switch (estado) {
                case 'Completada': return 'bg-green-100 text-green-800';
                case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
                case 'En Proceso': return 'bg-blue-100 text-blue-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        };

        const handleViewDetails = (compra) => {
            setSelectedCompra(compra);
            setShowModal(true);
        };

        return React.createElement('div', {
            className: 'space-y-6 fade-in',
            'data-name': 'compras-page',
            'data-file': 'pages/Compras.js'
        },
            React.createElement('div', {
                className: 'flex justify-between items-center'
            },
                React.createElement('div', null,
                    React.createElement('h1', {
                        className: 'text-3xl font-bold text-gray-900'
                    }, 'Gestión de Compras'),
                    React.createElement('p', {
                        className: 'text-gray-600 mt-1'
                    }, 'Administra todas las compras y proveedores')
                ),
                React.createElement('button', {
                    className: 'btn-gradient text-white px-6 py-3 rounded-lg font-semibold'
                },
                    React.createElement('i', {
                        className: 'fas fa-plus mr-2'
                    }),
                    'Nueva Compra'
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
                    }, 'Lista de Compras')
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
                                ['ID', 'Proveedor', 'Categoría', 'Monto', 'Fecha', 'Estado', 'Acciones'].map(header =>
                                    React.createElement('th', {
                                        key: header,
                                        className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                    }, header)
                                )
                            )
                        ),
                        React.createElement('tbody', {
                            className: 'divide-y divide-gray-200'
                        },
                            displayCompras.map(compra =>
                                React.createElement('tr', {
                                    key: compra.id,
                                    className: 'hover:bg-gray-50 transition-colors'
                                },
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm font-medium text-gray-900'
                                    }, `#${compra.id}`),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-900'
                                    }, compra.proveedor),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, compra.categoria),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm font-semibold text-gray-900'
                                    }, `$${compra.monto.toLocaleString()}`),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, compra.fecha),
                                    React.createElement('td', {
                                        className: 'px-6 py-4'
                                    },
                                        React.createElement('span', {
                                            className: `status-badge ${getStatusColor(compra.estado)}`
                                        }, compra.estado)
                                    ),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm'
                                    },
                                        React.createElement('button', {
                                            onClick: () => handleViewDetails(compra),
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
                title: `Detalles de Compra #${selectedCompra?.id}`,
                size: 'md'
            },
                selectedCompra && React.createElement('div', {
                    className: 'space-y-4'
                },
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Proveedor'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm text-gray-900'
                            }, selectedCompra.proveedor)
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Monto'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm font-semibold text-gray-900'
                            }, `$${selectedCompra.monto.toLocaleString()}`)
                        )
                    ),
                    React.createElement('div', {
                        className: 'grid grid-cols-2 gap-4'
                    },
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Fecha'),
                            React.createElement('p', {
                                className: 'mt-1 text-sm text-gray-900'
                            }, selectedCompra.fecha)
                        ),
                        React.createElement('div', null,
                            React.createElement('label', {
                                className: 'block text-sm font-medium text-gray-700'
                            }, 'Estado'),
                            React.createElement('span', {
                                className: `status-badge ${getStatusColor(selectedCompra.estado)} mt-1`
                            }, selectedCompra.estado)
                        )
                    )
                )
            )
        );

    } catch (error) {
        console.error('Compras component error:', error);
        reportError(error);
    }
}
