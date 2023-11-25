const seats = document.querySelectorAll(".seats .seat");
const selectedSeat = document.querySelectorAll(".selected-seat");
const seatCount = document.querySelector(".countOfSeats");
const seatPrice = document.querySelector(".price");
const movieList = document.querySelector("#movie");

let countOfSelectedSeat = 0;
let currentMovieValue;

movieList.addEventListener("change",deneme);

let movies = [
  { name: "Toy Story 4", moviePrice: 10 },
  { name: "Atatürk", moviePrice: 15 },
  { name: "The Marvels", moviePrice: 20 },
  { name: "Çok Aşk", moviePrice: 15 },
];

showMovieListToUI();

function showMovieListToUI() {
  movies.forEach((movie) => {
    movieList.innerHTML += `
        <option value="${movie.moviePrice}">${movie.name} (${movie.moviePrice}₺)</option>
    `;
  });
}

function deneme(e){
    currentMovieValue = movieList.value
    seatPrice.innerHTML = countOfSelectedSeat * currentMovieValue;
    seatCount.innerHTML = countOfSelectedSeat; 
}

seats.forEach((seat) =>
  seat.addEventListener("click", (e) => {
    seat.classList.toggle("selected-seat");
    if (seat.classList.contains("selected-seat")) {
      countOfSelectedSeat++;
      deneme(e)
    } else {
      countOfSelectedSeat--;
      deneme(e)
      if(countOfSelectedSeat == 0){
        seatPrice.innerHTML = 0
      }
    }
  })
);


function randomRowId(){
    seats.forEach(seat => {
       return seat.id = Math.floor(Math.random()*200 + 1);
    });
}



