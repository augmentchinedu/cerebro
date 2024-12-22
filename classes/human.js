class Human {
	constructor(id) {
		this.id = id;
		this.position = [0, 0, 0];
		this.experiences = [];
	}

	experience() {
		this.experiences.push({
			health: 100,
			strength: 100,
		});
		console.log("hha");
	}
}
