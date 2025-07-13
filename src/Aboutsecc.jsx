function Aboutsecc(props){
    return(
        <div>
            <img src={props.imgpath} alt="" class="img-fluid p-4 "/>
            <div className="h4 text-cente text-dark"><b>{props.title}</b></div>
        </div>
    )
}

export default Aboutsecc;