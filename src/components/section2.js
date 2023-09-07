import React, {useState} from "react";
import data from '../data'

const Section2 =()=>{
    const [noOfElement, setnoOfElement] = useState(3);
    const seeMore = ()=>{
        setnoOfElement(noOfElement + noOfElement);
    }

    const slice = data.cardData.slice(0,noOfElement );
    return(
        <div>
            <h1 className="align-text-cener">Section 2</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">

                      {slice.map((item,index) =>{
                         return(
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.card_title}</h5>
                                    <p className="card-text">{item.data_type}</p>
                                    <p className="card-text">{item.data_value}</p>

                                    <a href="#" class="btn btn-primary">{item.button_name}</a>
    
                                </div>
    
                            </div>
    
                        </div>
                         )
                      })}

                     



                   

                </div>
                <button 
                      className="btn btn-dark d-block float-right w-25 "
                      onClick={() => seeMore()}
                      >
                        See More

                      </button>
            </section>

        </div>
    )
}

export default Section2;