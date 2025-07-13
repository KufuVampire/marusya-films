class ApiRoutes {
	private root = '/';
	private auth = `${this.root}auth`;

	login = `${this.auth}/login`;
	logout = `${this.auth}/logout`;

	createUser = `${this.root}user`;
	profile = `${this.root}profile`;

	favorites = `${this.root}favorites`;
	deleteFavorite(id: number) {
		return `${this.favorites}/${id}`;
	}

	movie = `${this.root}movie`;
	top10 = `${this.movie}/top10`;
	genres = `${this.movie}/genres`;
	movieById(id: string) {
		return `${this.movie}/${id}`;
	}
	random = `${this.movie}/random`;
}

export const API_ROUTES = new ApiRoutes();
