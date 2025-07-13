class PageRoutes {
	private root = '/';

	home = `${this.root}`;
	genres = `${this.root}genres`;
	moviesByGenre(genre: string) {
		return `${this.genres}/${genre}`;
	}

	profile = `${this.root}profile`;
	profileFavorites = `${this.profile}/favorites`;
	profileSettings = `${this.profile}/settings`;

	movieById(id: number) {
		return `${this.root}movie/${id}`;
	}
}

export const PAGE_ROUTES = new PageRoutes();
