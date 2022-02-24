var genericAnimal = Object.create(null);

genericAnimal.name = "Animal";
genericAnimal.gender = "Female";
genericAnimal.description = function () {
  return `Gender : ${this.gender} , name : ${this.name} `;
};

console.log(genericAnimal.name);
