var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

// booking appointment
$(".book").click(function (e) {
  e.preventDefault();
  $('.hero').hide();
  $('.overview').hide();
  $('.link').hide();
  $('.popular').hide();
  $('.card-body').hide();
  $(".appoint").show();

});
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  //  console.log(date.getDay()); 

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // console.log(lastDay);

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  // console.log(prevLastDay);

  const firstDayIndex = date.getDay();
  console.log(firstDayIndex);


  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  // console.log(lastDayIndex);
  const nextDays = 7 - lastDayIndex - 1;

  const months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  document.querySelector(".date h3").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();


  let days = "";


  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x +1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`
    } else {
      days += `<div>${i}</div>`;
    }
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class= "next-date"> ${j}</div>`;
    monthDays.innerHTML = days
  }
  document.querySelector(".dateSelected").innerHTML = new Date();

};
renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

$(".booked").click(function (e) {
  e.preventDefault();
  $('.hero').show();
  $('.overview').show();
  $('.link').show();
  $('.popular').show();
  $('.card-body').show();
  $(".appoint").hide();

});