

const openModalBtn = document.getElementById('modal');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementsByClassName('close')[0];


function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}


openModalBtn.addEventListener('click', openModal);


closeModalBtn.addEventListener('click', closeModal);


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


//   ==============================================
const alertBtn = document.querySelector('#showAlertBtn');

alertBtn.addEventListener('click', () => {
  console.log('fff')
  toggleAlert()
})




function toggleAlert() {
  let alertElement = document.getElementById('myAlert');
  if (alertElement.style.display === 'none') {
    alertElement.style.display = 'block';
  } else {
    alertElement.style.display = 'none';
  }
}

// ===========================================================

function displayBirthdate() {
  const myBirthdate = moment("1993-05-07", "YYYY-MM-DD");
  const formattedBirthdate = myBirthdate.format("DD MMMM YYYY"); 
  document.getElementById("birthdateDisplay").textContent = formattedBirthdate;
}


function formatBirthdate() {
  const inputDate = document.getElementById('birthdateInput').value;
  const expectedFormat = /^\d{4}-\d{2}-\d{2}$/;

  if (!expectedFormat.test(inputDate)) {
    // Якщо формат не відповідає очікуванням - виводимо помилку та приховуємо результат
    document.getElementById('birthdateInput').classList.add('is-invalid');
    document.getElementById('result').style.display = 'none';
  } else {
    // Якщо формат відповідає - виводимо результат і приховуємо помилку
    document.getElementById('birthdateInput').classList.remove('is-invalid');
    const formattedDate = moment(inputDate, "YYYY-MM-DD").format("DD MMMM YYYY");
    document.getElementById('formattedDate').textContent = formattedDate;
    document.getElementById('result').style.display = 'block';
  }
}


document.getElementById('birthdateForm').addEventListener('submit', function(event) {
  event.preventDefault();
  formatBirthdate();
});


displayBirthdate();


