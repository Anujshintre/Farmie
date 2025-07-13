function News(){
    return(
       <div className="container-fluid news">
          <div className="row">
            <div className="col-12 mt-5 d-flex justify-content-center">
                <div className="col-1 me-0 ps-0 text-center"><img src="Images/illustration/quote.png" alt="" /></div>
                <div className="col-8 col-md-6">
                    <div className="h5  text-light">
                    "Thank you for your organic products. My children like your products and they use for breakfast. We are loving the pure milk, freshly fruit and of course our staple, Brown Rice Bread. Your Gluten Free breads truly make me feel
                    lighter and uplifted. It's the only bread I plan to eat for the rest of my life. I will use them for many years."
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-1 ">
                    <img src="Images/illustration/16.jpg" alt="" class="img-fluid  rounded-circle"/>
                </div>
                <div className="col-4 p-2 ">
                    <div className="h4">Akash Khan</div>
                    <div className="h6 customer">Customer</div>
                </div>
            </div>
          </div>
       </div>
    )
}

export default News;