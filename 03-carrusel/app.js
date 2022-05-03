// local reviews data
const reviews = [
    {
      id: 1,
      name: "Patricio O'Ward",
      job: "Piloto de Indy",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pato_O%27Ward_%282021%29.jpg/338px-Pato_O%27Ward_%282021%29.jpg",
      text:
        " También conocido como Pato O'Ward, es un piloto de automovilismo de velocidad mexicano. Fue campeón de IMSA PC en 2017 e Indy Lights en 2018. Participa en la IndyCar Series desde 2019, donde cosechó dos victorias y nueve podios. Finalizó cuarto en 2020 y tercero en 2021 con el equipo Arrow McLaren SP.",
    },
    {
      id: 2,
      name: "Pedro Rodríguez",
      job: " piloto de automovilismo ",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pedro_Rodr%C3%ADguez_1968_N%C3%BCrburgring-1.jpg/368px-Pedro_Rodr%C3%ADguez_1968_N%C3%BCrburgring-1.jpg",
      text:
        "​ fue un piloto de automovilismo de velocidad mexicano. Disputó 55 Grandes Premios de Fórmula 1 entre 1963 y 1971, logrando dos victorias y siete podios. Su mejor resultado en el campeonato fueron dos sextos puestos en la temporada 1967 y 1968, y un séptimo en 1970. ",
    },
    {
      id: 3,
      name: "Checo",
      job: "Piloto F1",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sergio_P%C3%A9rez_2019_%28cropped%29.jpg/338px-Sergio_P%C3%A9rez_2019_%28cropped%29.jpg",
      text:
        " También conocido como Checo, es un piloto de automovilismo mexicano.1​ Inició su carrera en monoplazas en 2004. Tres años más tarde fue campeón de Fórmula 3 Británica. Debutó en GP2 Series en 2009 y al año siguiente fue subcampeón.",
    },
    

  ];
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let currentItem = 0;
  window.addEventListener("DOMContentLoaded", function () 
  {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  

  function showPerson(person) 
  {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener("click", function () 
  {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () 
  {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () 
  {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });