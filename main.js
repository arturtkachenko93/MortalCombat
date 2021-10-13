const personageOne = {
  name: "Sonya",
  hp: 65,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ["rapira", "valenki", "ak74"],
  attack: function () {
    console.log(`${this.name} Fight..!`);
  },
};

const personageTwo = {
  name: "Scorpion",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ["rapira", "valenki", "ak74"],
  attack: function () {
    console.log(`${this.name} Fight..!`);
  },
};

function createPlayer(player, personage) {
  const $arena = document.querySelector('.arenas');
  const $player1 = document.createElement('div');
  const $progressbar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $picture = document.createElement('img');

  $player1.classList.add(player);
  $progressbar.classList.add('progressbar');
  $character.classList.add('character');
  $life.classList.add('life');
  $name.classList.add('name');

  $life.style.width=`${personage.hp}%`;
  $name.textContent = personage.name;
  $picture.src=personage.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($picture);
  $arena.appendChild($player1);
}

createPlayer('player1', personageOne);
createPlayer('player2', personageTwo);