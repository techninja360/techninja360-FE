const dev = process.env.NODE_ENV !== 'production';

export const backend_server = dev ? 'http://localhost:8000' : 'https://stimulating-juice-production.up.railway.app/';
export const frontend_server = dev ? 'http://localhost:3000' : 'https://techninja360.com';