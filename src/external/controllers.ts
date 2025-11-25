import type { Request, Response } from 'express';
import type { UsecaseLayer } from '../internal/usecase';
import type { User } from '../internal/entity';

export class ControllerLayer {
	constructor(private usecase: UsecaseLayer) {}

	login = async (req: Request, res: Response) => {
		let bodyReq = req.body as User;
		let response = await this.usecase.login(bodyReq.name, bodyReq.password);
		if (response) {
			req.session.user = {
				id: response._id!,
				email: response.email!,
				name: response.name!,
				password: response.password!,
			};
		}
		res.status(200).json(response);
	};

	register = async (req: Request, res: Response) => {
		let bodyReq = req.body as User;
      let response = await this.usecase.registerUser(bodyReq)
      res.status(200).json(response)
	};
}
