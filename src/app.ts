import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { UserRoutes } from './routes/user.routes';

class App {
	private app: Application;
	private http: http.Server;
	private io: Server;
	private userRoutes: UserRoutes;

	constructor() {
		this.userRoutes = new UserRoutes();
		this.app = express();
		this.http = new http.Server(this.app);
		this.io = new Server(this.http);
		this.middlewaresInitialize();
		this.initializeRoutes();
		this.initializeHtml();

	}

	listen() {
		this.http.listen(3333, () => console.log('Server is running'));
	}

	listenSocket() {
		this.io.on('connection', (userSocket) => {
			console.log('a user connected: ', userSocket)
		})
	}

	private initializeHtml() {
		this.app.get('/index', (req, res) => {
			console.log('HTML is running')
			res.sendFile(__dirname + "/index.html")
		})
	}

	private middlewaresInitialize() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private initializeRoutes() {
		this.app.use('/users', this.userRoutes.router);
	}
}

export { App };
