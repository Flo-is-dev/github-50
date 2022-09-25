const obj = {
  // index: value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,
  direBonjour: function () {
    // console.log("Bonjour je suis " + this.pseudo);
  },
  // ******on y déclare une méthode (2eme syntaxe)
  // direBonjour() {
  //   console.log("Bonjour je suis" + this.pseudo);
  // },
};

// console.log(obj.direBonjour());

// ****************ajouter un index à l'objet
obj.age = 24;
obj["admin"] = true; //2ème manière d'ajouter

// console.log(obj);

// ***********Supprimer
delete obj.ville;
// console.log(obj);

//*********** */ modifier
obj.pseudo = "FS";
// console.log(obj);

// *******Checker si une propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

// ************parcourir un objet
for (const key in obj) {
  // console.log(key + " : " + obj[key]);
}

// ******Obtenir les clés(index) d'un objet
const keys = Object.keys(obj);

// console.log(keys);

// ******Obtenir les valeurs de l'objet
const values = Object.values(obj);
// console.log(values);

// *******Obtenir tous les élements comprenant un tableau

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1.80",
  poids: "75kg",
  // Si meme index c'est le dernier annoncé qui écrase le 1er
};

// *********Fusionner Objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modifications sur des paramètres
// const newObj = Object.freeze(obj); //Avec Freeze on peut rien changer
const newObj = Object.seal(obj); //Avec Seal on ne peut pas changer les index mais on peut changer les valeurs
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

// console.log(newObj);

// ---------------
// Contruire des objets
// ----------------

// *******Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("From SCratch", "Bordeaux");
const user2 = new User("Denis", "Nantes");
// console.log(user1);
// console.log(user2);

// console.log(user2.getCity());

// ----------------
// Factory functions, methode qui existe mais est peu utilisé (à l'inverse de celle du dessus)
function User3(pseudo, ville) {
  return {
    pseudo, //En Javascript moderne pas besoin d'écrire pseudo:pseudo,
    ville,
  };
}
const user4 = User3("FS", "nice");

// console.log(user4);

// ----------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //METHODES
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Sylvie", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habitde à " + this.ville);
};
// console.log(user5.sayCity());

Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  },
});

//-----------
// L'héritage (surtout utilisé en PHP, peu en Javascript)
// ----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

// On crée la class chien qui hérite de la class Animal ainsi que de sa méthode

class Dog extends Animal {
  run() {
    console.log("le chien court");
  }
}

class cat extends Animal {
  hunt() {
    console.log("j'ai kill un oiseau");
  }
}

const rintintin = new Dog("rintintin", 9);
console.log(rintintin);
