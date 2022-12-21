const dev = process.env.NODE_ENV !== 'production';

export const backend_server = dev ? 'http://localhost:8000' : 'https://posh-debt-production.up.railway.app/';