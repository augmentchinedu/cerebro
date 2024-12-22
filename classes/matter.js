class Matter {
	constructor(id) {
		this.name = "Matter";
		this.id = id;
		this.mind = new Mind();
	}

	speak() {}

	echo(Entitiies) {
		Entitiies.value.forEach((entity) => {
			entity.experience();
		});
	}
}

module.exports = { Matter };
