class User {
	private email: string;
	constructor(email: string) {
		this.email = email;
	}

	validadeEmail() {
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		return emailRegex.test(this.email)
	}
}

export { User };

