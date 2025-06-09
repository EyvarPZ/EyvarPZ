function Modal({ isOpen, onClose, title, children, size = 'md' }) {
    try {
        const [isAnimating, setIsAnimating] = React.useState(false);

        React.useEffect(() => {
            if (isOpen) {
                setIsAnimating(true);
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }

            return () => {
                document.body.style.overflow = 'unset';
            };
        }, [isOpen]);

        const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        const getSizeClasses = () => {
            switch (size) {
                case 'sm': return 'max-w-md';
                case 'lg': return 'max-w-4xl';
                case 'xl': return 'max-w-6xl';
                default: return 'max-w-2xl';
            }
        };

        if (!isOpen) return null;

        return React.createElement('div', {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 ${
                isAnimating ? 'animate-fadeIn' : ''
            }`,
            onClick: handleBackdropClick,
            'data-name': 'modal-overlay',
            'data-file': 'components/Modal.js'
        },
            React.createElement('div', {
                className: 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
            }),
            React.createElement('div', {
                className: `relative bg-white rounded-2xl shadow-2xl w-full ${getSizeClasses()} max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
                    isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`
            },
                React.createElement('div', {
                    className: 'flex items-center justify-between p-6 border-b border-gray-200'
                },
                    React.createElement('h3', {
                        className: 'text-xl font-semibold text-gray-900'
                    }, title),
                    React.createElement('button', {
                        onClick: onClose,
                        className: 'p-2 hover:bg-gray-100 rounded-full transition-colors'
                    },
                        React.createElement('i', {
                            className: 'fas fa-times text-gray-500'
                        })
                    )
                ),
                React.createElement('div', {
                    className: 'p-6 overflow-y-auto max-h-[calc(90vh-120px)]'
                }, children)
            )
        );

    } catch (error) {
        console.error('Modal component error:', error);
        reportError(error);
        return null;
    }
}
