let superheroData = [
  { name:'Batman', phone_number:'202-456-2234', comics_affiliation:'humanity', image_url:'http://i.imgur.com/WPhp4m3.jpg'  },
  { name:'Hulk', phone_number:'202-786-0098', comics_affiliation:'humanity', image_url:'http://i.imgur.com/QOpbFG4.jpg' },
  { name:'Spiderman', phone_number:'334-234-8976', comics_affiliation:'humanity', image_url:'http://i.imgur.com/t7ZFgdE.jpg' },
  { name:'Superwoman', phone_number:'345-789-9908', comics_affiliation:'humanity', image_url:'http://i.imgur.com/Jr6nXBL.jpg' },
  { name:'Superman', phone_number:'202-909-0098', comics_affiliation:'humanity', image_url:'http://i.imgur.com/EYSkgcY.jpg' },
  { name:'Wonderwoman', phone_number:'202-786-2231', comics_affiliation:'humanity', image_url:'http://i.imgur.com/CtAkTsJ.jpg' }
]

angular
  .module("superheroApp", [])
  .controller("SuperheroController", [SuperheroControllerFunction])
