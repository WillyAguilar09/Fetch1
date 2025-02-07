fetch("https://api.escuelajs.co/api/v1/users")
.then(Response=>Response.json())
.then(data=>{
    let card=""
    data.forEach(user => {
        card+=`
        <div class="col">
            <div class ="card">

            <div class="card-body">
                <h5 class card-title>${user.name}</h5>
                <ul class=list-group list-group-flush>
                <li class="list-group-item"><strong>Usuario </strong>${user.email}</li>

                <li class="list-group-item"><strong>Email </strong>${user.password}</li>
                
                <li class="list-group-item"><strong>Direccion </strong>${user.name}</li>
                
                <li class="list-group-item"><img src ="${user.avatar}" alt ="Avatar" class="card-img-top"></li>

               
                
                </ul>
            </div>
        </div>
        </div>
         `
        
    });
    document.getElementById("cardlist").innerHTML=card
})
