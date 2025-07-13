function Card(props){
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                <div class="card border-0">
                   <img src={props.imgpath} class="card-img-top img-fluid" alt="..."/>
                   <div class="card-body position-relative">
                      <img src={props.ic} alt="" class="img-fluid  chicken"/>
                      <h6 class="card-title mt-5 text-center text-secondary">Farming Pratice For</h6>
                      <div className="h3 text-center">{props.title}</div>
                      <p class="card-text text-center text-secondary">Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim....</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;