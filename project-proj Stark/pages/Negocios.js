function Negocios() {
    try {
        const [negocios, setNegocios] = React.useState([]);
        const [showModal, setShowModal] = React.useState(false);

        React.useEffect(() => {
            loadNegocios();
        }, []);

        const loadNegocios = async () => {
            try {
                const result = await trickleListObjects('negocio', 50, true);
                setNegocios(result.items || []);
            } catch (error) {
                console.error('Error loading negocios:', error);
            }
        };

        const sampleNegocios = [
            { id: 1, titulo: 'Desarrollo Web', cliente: 'Tech Solutions', valor: 45000, estado: 'Propuesta', probabilidad: 75, fecha: '2024-01-15' },
            { id: 2, titulo: 'Marketing Digital', cliente: 'StartUp Inc', valor: 18500, estado: 'Negociación', probabilidad: 60, fecha: '2024-01-14' },
            { id: 3, titulo: 'Sistema ERP', cliente: 'Manufacturing Corp', valor: 125000, estado: 'Cerrado', probabilidad: 100, fecha: '2024-01-13' }
        ];

        const displayNegocios = negocios.length > 0 ? negocios : sampleNegocios;

        const getStatusColor = (estado) => {
            switch (estado) {
                case 'Cerrado': return 'bg-green-100 text-green-800';
                case 'Negociación': return 'bg-blue-100 text-blue-800';
                case 'Propuesta': return 'bg-yellow-100 text-yellow-800';
                default: return 'bg-gray-100 text-gray-800';
            }
        };

        return React.createElement('div', {
            className: 'space-y-6 fade-in',
            'data-name': 'negocios-page',
            'data-file': 'pages/Negocios.js'
        },
            React.createElement('div', {
                className: 'flex justify-between items-center'
            },
                React.createElement('div', null,
                    React.createElement('h1', {
                        className: 'text-3xl font-bold text-gray-900'
                    }, 'Pipeline de Negocios'),
                    React.createElement('p', {
                        className: 'text-gray-600 mt-1'
                    }, 'Gestiona oportunidades y cierra más ventas')
                ),
                React.createElement('button', {
                    onClick: () => setShowModal(true),
                    className: 'btn-gradient text-white px-6 py-3 rounded-lg font-semibold'
                },
                    React.createElement('i', {
                        className: 'fas fa-plus mr-2'
                    }),
                    'Nueva Oportunidad'
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
                    }, 'Oportunidades Activas')
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
                                ['Oportunidad', 'Cliente', 'Valor', 'Probabilidad', 'Estado', 'Fecha'].map(header =>
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
                            displayNegocios.map(negocio =>
                                React.createElement('tr', {
                                    key: negocio.id,
                                    className: 'hover:bg-gray-50 transition-colors'
                                },
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm font-medium text-gray-900'
                                    }, negocio.titulo),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-900'
                                    }, negocio.cliente),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm font-semibold text-gray-900'
                                    }, `$${negocio.valor.toLocaleString()}`),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, `${negocio.probabilidad}%`),
                                    React.createElement('td', {
                                        className: 'px-6 py-4'
                                    },
                                        React.createElement('span', {
                                            className: `status-badge ${getStatusColor(negocio.estado)}`
                                        }, negocio.estado)
                                    ),
                                    React.createElement('td', {
                                        className: 'px-6 py-4 text-sm text-gray-600'
                                    }, negocio.fecha)
                                )
                            )
                        )
                    )
                )
            )
        );

    } catch (error) {
        console.error('Negocios component error:', error);
        reportError(error);
    }
}
