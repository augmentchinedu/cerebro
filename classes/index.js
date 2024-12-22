import { ref } from "vue";

const entities = {
	Human: () => {
		let Humans = [];
		for (let i = 0; i < 1000000; i++) {
			Humans.push(new Human(i));
		}
		return Humans;
	},
};

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


const Humans = ref(entities["Human"]());

export { Man, Woman, Matter, Humans };
