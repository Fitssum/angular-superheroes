let superheroesData = [
  { name:'batman', phone_number:'202-456-2234', comics_affiliation:'power', image_url:'http://i.imgur.com/WPhp4m3.jpg', completed:true },
  { name:'hulk', phone_number:'202-786-0098', comics_affiliation:'anger', image_url:'http://i.imgur.com/QOpbFG4.jpg', completed:true },
  { name:'spiderman', phone_number:'334-234-8976', comics_affiliation:'fear', image_url:'http://i.imgur.com/t7ZFgdE.jpg', completed:true },
  { name:'superwoman', phone_number:'345-789-9908', comics_affiliation:'humanity', image_url:'http://i.imgur.com/Jr6nXBL.jpg', completed:false },
  { name:'superman', phone_number:'202-909-0098', comics_affiliation:'fictious', image_url:'http://i.imgur.com/EYSkgcY.jpg', completed:false },
  { name:'wonderwoman', phone_number:'202-786-2231', comics_affiliation:'graceful', image_url:'http://i.imgur.com/CtAkTsJ.jpg', completed:false }
]

angular
  .module("superheroesApp", [])
  .controller("SuperheroesController", [SuperheroesControllerFunction])

  function SuperheroesControllerFunction () {
    this.superheroes = superheroesData
    this.addSuperheroes = function() {
      let superheroes = {title: this.newSuperheroes, completed: true}
      this.superheroes.push(superheroes)
  };
};
