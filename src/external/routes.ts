import Express from 'express';
import { UsecaseLayer } from '../internal/usecase';
import { connMongoDB } from './conndb';
import { ControllerLayer } from './controllers';
import { RepositoryLayer } from './repository';

export async function routesManager(server: Express.Application) {
	const repository = new RepositoryLayer(await connMongoDB());
	const service = new UsecaseLayer(repository);
	const handle = new ControllerLayer(service);

	server.post('/api/auth/register');
	server.post('/api/auth/login');
	server.get('/api/users/me');

	server.post('/api/organizations');
	server.get('/api/organization/:id');
	server.put('/api/organization/:id');

	server.post('/api/opportunities');
	server.get('/api/opportunities');
	server.get('/api/opportunities/match');
	server.post('/api/opportunities/:id/apply');

   server.post('/api/users/my-applications')
}
