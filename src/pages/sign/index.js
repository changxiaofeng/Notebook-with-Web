import Login from './login';

// import login from './stores/login'

export default [
    {
        key: 'sign/login',
        path: 'login',
        page: () => import('./login'),
        footer: true,
        store: {
            key: 'login',
            value: Login,
        }
    }
]