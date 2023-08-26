const elName = document.querySelector("#name");
const elPhone = document.querySelector("#phone");
const elMail = document.querySelector("#email");
const elLocation = document.querySelector("#location");
const elMessage = document.querySelector("#message");
const elBtn = document.querySelector("#btn-submit");
const elCards = document.querySelector(".cards");
const elForm = document.querySelector("#contact-form")

elBtn.addEventListener("click", function(evt){
    evt.preventDefault();

    if(elName.value !== ""){
        const newCard = document.createElement("div");
        newCard.className = "card mt-5";
        newCard.style.width = "20rem";
        newCard.innerHTML = `
        <div>
            <h3 class="text-center"><b>Person</b></h3>
            <div class="card-header">
              Info
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa fa-user" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp; ${elName.value}</li>
              <li class="list-group-item"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; ${elPhone.value}</li>
              <li class="list-group-item"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; ${elMail.value}</li>
            <li class="list-group-item"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; ${elLocation.value}</li>
            </ul>
        </div>
        `
        elCards.appendChild(newCard)
        elForm.reset()
    }
    else{
        alert("Fill out the contact information")
    }
})