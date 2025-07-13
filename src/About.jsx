import Aboutsecc from "./Aboutsecc";

function About(){
    const Aboutsec = [
        {
            img:"Images/illustration/digger.png",
            tit:"Best Services"
        },

        {
            img:"Images/illustration/windmill.png",
            tit:"Farm Experiences"
        },

        {
            img:"Images/illustration/cereals.png",
            tit:"100% Natural"
        },

        {
            img:"Images/illustration/tractor.png",
            tit:"Farm Equipment"
        },

        {
            img:"Images/illustration/sunrise.png",
            tit:"Organic Food"
        }


    ]
    return(
        
         <div className="container-fluid mt-5">
            <div className="container ">
                <div className="row p-5">
                    <div className="col-12 text-center">
                        <img src="Images/illustration/2.jpg" alt="" class="img-fluid"/>
                    </div>
                    <div className="row d-flex justify-content-between mt-4" >
                        <div className="col-8 col-md-4 col-lg-2 ">
                            <Aboutsecc imgpath={Aboutsec[0].img} title={Aboutsec[0].tit}/>
                        </div>
                        <div className="col-8 col-md-4 col-lg-2 ">
                           <Aboutsecc imgpath={Aboutsec[1].img} title={Aboutsec[1].tit}/>
                        </div>
                        <div className="col-8 col-md-4 col-lg-2 ">
                          <Aboutsecc imgpath={Aboutsec[2].img} title={Aboutsec[2].tit}/>
                        </div>
                        <div className="col-8 col-md-4 col-lg-2 ">
                          <Aboutsecc imgpath={Aboutsec[3].img} title={Aboutsec[3].tit}/>
                        </div>
                        <div className="col-8 col-md-4 col-lg-2 ">
                             <Aboutsecc imgpath={Aboutsec[4].img} title={Aboutsec[4].tit}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 mt-4">
                        <div className="h5 text-secondary ">ABOUT US</div>
                        <div className="h1 minihead mt-4">Let Us<small class="text-dark"> Tell You Our Story</small></div>
                        <img src="Images/illustration/decor.png" alt="" class="img-fluid"/>
                        <p class="mt-5">Lorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam nunc elit, pretium atlanta urna veloci, fermentum malesuda mina. Donec auctor nislec neque sagittis, sit amet dapibus pellentesque donal feugiat. Nulla mollis magna non
                        sanaliquet, volutpat do zutum, ultrices consectetur, ultrices at purus.</p>    
                        <div className="btn btn-success mt-3">Read More</div>          
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="Images/illustration/6.jpg" alt="" class="img-fluid rounded-circle" height="200px"/>
                    </div>
                </div>
            </div>
         </div>      
    
    )
}

export default About;