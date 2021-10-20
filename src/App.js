import logo from './logo.svg';
import './App.css';

function App() {
  
  function validateForm(e) {
    e.preventDefault();

    var phone = document.forms["myForm"]["phone"].value;
    if(phone.length != 10 || phone == null) document.getElementById("phone").classList.add("is-invalid");
    else document.getElementById("phone").classList.remove("is-invalid");

    var email = document.forms["myForm"]["email"].value;
    var re = /\S+@\S+\.\S+/;

    if(email == null) document.getElementById("email").classList.add("is-invalid");
    else if(!re.test(email)) document.getElementById("email").classList.add("is-invalid");
    else document.getElementById("email").classList.remove("is-invalid");
    
    var startDate = document.forms["myForm"]["startDate"].value;

    if(startDate == "") document.getElementById("startDate").classList.add("is-invalid");
    else document.getElementById("startDate").classList.remove("is-invalid");

    var endDate = document.forms["myForm"]["endDate"].value;

    if(endDate == "") document.getElementById("endDate").classList.add("is-invalid");
    else document.getElementById("endDate").classList.remove("is-invalid");

    if(startDate != "" && endDate != "" && endDate < startDate){
      document.getElementById("endDateError").classList = "";
      document.getElementById("endDateError").classList.add("show-error");
    }else{
      document.getElementById("endDateError").classList = "";
      document.getElementById("endDateError").classList.add("end-date-error");
    }
  }

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-custom navbar-dark">
        <div class="container-fluid d-flex">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-sm-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Text1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Text2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Text3</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Text4</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="form-container mt-4 row">
          <div className="col-md-6 col-12">
            <form name="myForm">
              <div class="row">
                <div class="col-md-12 mb-3">
                  <label for="phone">Phone</label>
                  <input type="number" class="form-control" id="phone"/>
                  <div class="invalid-feedback">
                    Please provide a valid Phone Number.
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email"/>
                  <div class="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 mb-3">
                  <label for="startDate">Start</label>
                  <input type="date" class="form-control" id="startDate"/>
                  <div class="invalid-feedback">
                    Please provide a valid start date.
                  </div>
                </div>
                <div class="col-6 mb-3">
                  <label for="endDate">End</label>
                  <input type="date" class="form-control" id="endDate"/>
                  <div class="invalid-feedback">
                    Please provide a valid end date.
                  </div>
                  <div id="endDateError" class="end-date-error">
                    End date can't be smaller than start date
                  </div>
                </div>
                
              </div>
              <button class="btn btn-primary" type="submit" onClick={validateForm}>Submit form</button>
            </form>
          </div>
          <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-md-6 col-12 demo-box"></div>
                <div className="col-md-6 col-12 demo-box"></div>
                <div className="col-md-6 col-12 demo-box"></div>
                <div className="col-md-6 col-12 demo-box"></div>
              </div>
          </div>
        </div>
      </main>

    </div>
  );

  
}



export default App;
