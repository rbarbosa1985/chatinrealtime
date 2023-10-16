import { Router } from "express";
import { UserController } from "../controllers/user.controller";

class UserRoutes {
	public router: Router;
	private userController: UserController;

	constructor() {
		this.router = Router();
		this.userController = new UserController();
		this.getRoutes();
	}

	getRoutes() {
		this.router.post('/', this.userController.store.bind(this.userController))
	}
}

export { UserRoutes };
