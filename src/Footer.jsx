import styled from "styled-components";

function Footer(){

  const Icon = styled.div`
  color:rgb(119, 177, 34);`


    return(
        <div className="container-fluid footer d-flex align-items-center">
            
            <div className="row  ps-2 d-flex justify-content-center ">
            <div className="col-12 col-md-5 col-lg-3">
                <img src="Images/illustration/logo2.png" alt="" class="img-fluid"/>
                <p class="text-light">Lorem ipsum dolor sit amet, consecte stare adipiscing elit. In act honcus risus atiner Pellentesque risus.</p>
                <div className="row">
                    <div className="col-1 ps-2">
                      <Icon> <i class="fas fa-map-marker-alt  fs-4"></i></Icon>
                    </div>
                    <div className="col-11">
                     <p class="text-light p-1">120 Raymond Rd, New York</p> 
                    </div>    

                    <div className="col-1 ps-2">
                      <Icon><i class="far fa-envelope  fs-4"></i></Icon>
                    </div>
                    <div className="col-11">
                       <p class="text-light p-1 ">info.deercreative@gmail.com</p> 
                    </div>  

                    <div className="col-1 ps-2">
                     <Icon><i class="fas fa-phone-alt  fs-4"></i></Icon>
                    </div>
                    <div className="col-11">
                       <p class="text-light p-1"> +84 223 9000</p> 
                    </div> 
                </div>          
            </div>

            <div className="col-12 col-md-5 col-lg-2 ms-1">
              <div className="h4 text-light">QUICK LINK</div>
              <div className="row d-flex justify-content-between">
                <div className="col-4">
                  <a href="" class="text-light text-decoration-none">Purchase</a><br/>
                  <a href="" class="text-light text-decoration-none">Shipping</a><br/>
                  <a href="" class="text-light text-decoration-none">Return</a><br/>
                  <a href="" class="text-light text-decoration-none">Payments</a><br/>
                  <a href="" class="text-light text-decoration-none">Guide</a><br/>
                  <a href="" class="text-light text-decoration-none">News</a><br/>
                </div>
                <div className="col-4">
                  <a href="" class="text-light text-decoration-none">Policities</a><br/>
                  <a href="" class="text-light text-decoration-none">FAQs</a><br/>
                  <a href="" class="text-light text-decoration-none">Careers</a><br/>
                  <a href="" class="text-light text-decoration-none">Partners</a><br/>
                  <a href="" class="text-light text-decoration-none">Standard</a><br/>
                  <a href="" class="text-light text-decoration-none">Brands</a><br/>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-3 ms-2">
              <div className="h4 text-light">RECENT NEWS</div>

              <div className="row">
                <div className="col-4 p-2">
                  <img src="Images/illustration/4.jpg" alt="" class="img-fluid" />
                </div>
                <div className="col-8">
                  <p class="text-secondary">WA’s largest farming business on the market</p>
                  <p class="text-light">18 Aug 2018</p>
                </div>

                <div className="col-4 p-2"  >
                  <img src="Images/illustration/5.jpg" alt="" class="img-fluid" />
                </div>
                <div className="col-8">
                  <p class="text-secondary">Beef retail prices hit a record</p>
                  <p class="text-light">18 Aug 2018</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-lg-3 ms-1">
              <div className="h4 text-light">STAY CONNECTED</div>
              
              <div className="row">
                 <div className="col-2  mb-2">
                 <Icon> <i class="fa-brands fa-facebook ps-2 fs-4"></i></Icon>
                </div>
                <div className="col-9">
                 <Icon> <div className="h6 text-secondary ">Facebook</div></Icon>
                </div> 

                <div className="col-2 mb-2">
                 <Icon><i class="fa-brands fa-twitter  ps-2 fs-4 "></i></Icon>
                </div>
                <div className="col-9">
                  <div className="h6 text-secondary">Twitter</div>
                </div> 

                <div className="col-2 mb-2">
                  <Icon><i class="fa-brands fa-instagram  ps-2 fs-4 "></i></Icon>
                </div>
                <div className="col-9">
                  <div className="h6 text-secondary">Instagram</div>
                </div> 


              </div>           
            </div>
          </div>  
        </div>
    )
}

export default Footer;