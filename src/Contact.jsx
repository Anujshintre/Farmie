function Contact(){
    return(
        <div className="container-fluid">
            <div className="container">
            <div className="row d-flex justify-content-center">
               <div className="col-12 mt-5 col-lg-5">
               <div className="h5 mt-4 text-secondary">CONTACT NOW</div>
                        <div className="h1 minihead">Get In Touch<small class="text-dark"> With Us</small></div>
                        <img src="Images/illustration/decor.png" alt="" class="img-fluid "/>
                        <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
                        </div>
                        <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label">Your Email</label>
                           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
                        </div>
                        <div class="mb-3">
                           <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-success">SEND MESSAGE</button>
               </div>
               <div className="col-12 mt-5 col-lg-6">
                       <img src="Images/illustration/vt.webp" alt="" class="img-fluid" />
               </div>
            </div>

            <div className="col-12 mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-5 position-relative">
                       <img src="Images/illustration/17.jpg" alt="" class="img-fluid"/>
                       <div className="h6 position-absolute top-50">Post on <a href="#">18 Aug 2018</a> / <a href="#">Carlos Bacca</a></div>
                       <div className="h2 col-8 text-light mt-5 position-absolute top-50">Why innovation is key to maintaining our export
                         market share</div>
                    </div>
                    <div className="col-12 col-lg-6">
                         <div className="col-10 ps-2 box1">
                            <div className="h6 text-secondary">Post on 18 Aug 2018 / Peter Crough</div>
                            <div className="h3">Rising cattle supplies see beef export lifted</div>
                            <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>
                         </div>

                         <div className="col-10 ps-2 box1">
                            <div className="h6 text-secondary">Post on 18 Aug 2018 / Peter Crough</div>
                            <div className="h3">Cattle marts: Cows take a hit at the ringside</div>
                            <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>
                         </div>

                         <div className="col-10 ps-2 box1">
                            <div className="h6 text-secondary">Post on 18 Aug 2018 / Peter Crough</div>
                            <div className="h3">Malting barley price set to commence</div>
                            <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>
                         </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Contact;