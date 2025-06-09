let currentUser = null;

const users = [
    {
        id: 1,
        email: 'admin@crm.com',
        password: 'admin123',
        name: 'Administrador Principal',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 2,
        email: 'user@crm.com',
        password: 'user123',
        name: 'Usuario Estándar',
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 3,
        email: 'manager@crm.com',
        password: 'manager123',
        name: 'Gerente de Ventas',
        role: 'manager',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
];

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = { ...user };
        delete currentUser.password;
        localStorage.setItem('crmUser', JSON.stringify(currentUser));
        return currentUser;
    }
    return null;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('crmUser');
}

function getCurrentUser() {
    if (currentUser) return currentUser;
    
    const stored = localStorage.getItem('crmUser');
    if (stored) {
        try {
            currentUser = JSON.parse(stored);
            return currentUser;
        } catch (e) {
            localStorage.removeItem('crmUser');
        }
    }
    return null;
}

function isAuthenticated() {
    return getCurrentUser() !== null;
}
