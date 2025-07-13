function Navbar(){
    var menudata = ["Home","About","Product","Farming","Pages","News","Contact"]; 
    return(
        <div>
          
          <nav class="navbar fixed-top navbar-expand-lg bg-light text-light">
               <div class="container-fluid">
               <a class="navbar-brand" href="#"><img src="Images/illustration/logo.png" alt="" /></a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
               </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
               <ul class="navbar-nav ms-auto">
                 {menudata.map(item=>(
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" key={item}>{item}</a>
                    </li>
                 ))}
              </ul>
             </div>
            </div>
           </nav>

        </div>
    )
}

export default Navbar;