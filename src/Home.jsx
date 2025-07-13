import Navbar from "./Navbar";


function Home(){

    return(
        <div>
            <Navbar/>
            <div className="container-fluid ">
                <div className="row ">
                    <div id="carouselExampleCaptions" class="carousel slide">
                          <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  
                        </div>
                   <div class="carousel-inner">
                   <div class="carousel-item active position-relative">
                     <img src="Images/background/1.jpg" class="d-block w-100 class-img-fluid" alt="..."/>
                     <div class="carousel-caption d-none d-md-block caro-1">
                     <div className="display-2">The Hearth of The Farm Is The True Center Of Our Universe.</div>
                     <p>Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod est at mauris mollis ultricies.
                        Morbi arcu mi, dictum eu luala, dapibus interdum mollis.</p>
                      <div className="btn bttn">Contact Us</div>
                     </div>
                  </div>
                  <div class="carousel-item position-relative">
                     <img src="Images/background/7.jpg" class="d-block w-100" alt="..."/>
                     <div class="carousel-caption d-none d-md-block caro-1">
                     <div className="display-2">The Hearth of The Farm Is The True Center Of Our Universe.</div>
                     <p>Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod est at mauris mollis ultricies.
                        Morbi arcu mi, dictum eu luala, dapibus interdum mollis.</p>
                     <div className="btn btnn">Contact Us</div>
                    </div>
                 </div>
               </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
            </button>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Home;