import Card from "./card";

function Farming(){

   const value = [
     {
       img:"Images/illustration/9.jpg",
       icon:"Images/illustration/chicken.png",
       tit:"Chicken farmed For Meat"
     }, 
    
    {
        img:"Images/illustration/10.jpg",
        icon:"Images/illustration/pig.png",
        tit:"Pig Farm Management"
     },
    
    {
        img:"Images/illustration/11.jpg",
        icon:"Images/illustration/cow.png",
        tit:"Beef Cattle Farming"
    },

    {
        img:"Images/illustration/12.jpg",
        icon:"Images/illustration/cereal.png",
        tit:"Improved Rice Cultivation"
    },

    {
        img:"Images/illustration/13.jpg",
        icon:"Images/illustration/sprout.png",
        tit:"Soil Improvement Techniques"
    },

    {
        img:"Images/illustration/14.jpg",
        icon:"Images/illustration/s1.png",
        tit:"Intensive Fruit Farming"
    }

   ]

    return(
        <div>
            <div className="container-fluid">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="h5 mt-4 text-center text-secondary">MAKE THE GREEN WORLD</div>
                        <div className="h1 minihead text-center">Farming Pratices <small class="text-dark text-center"> To Preserve Land & Water </small></div>
                       <div className="col-12 d-flex justify-content-center">
                         <img src="Images/illustration/decor2.png" alt="" class="img-fluid "/>
                       </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 col-lg-4">
                            <Card imgpath={value[0].img} ic={value[0].icon} title={value[0].tit}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <Card imgpath={value[1].img} ic={value[1].icon} title={value[1].tit}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <Card imgpath={value[2].img} ic={value[2].icon} title={value[2].tit}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mt-2">
                            <Card imgpath={value[3].img} ic={value[3].icon} title={value[3].tit}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mt-2">
                            <Card imgpath={value[4].img} ic={value[4].icon} title={value[4].tit}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mt-2">
                            <Card imgpath={value[5].img} ic={value[5].icon} title={value[5].tit}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Farming;