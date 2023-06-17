import React,{useState} from "react";


function Gallery({data}) {
    return(
        <center>
            <div>
                <div className="row d-flex">
                {data.map((image) => 
                <div key={image.id}>
                    <div className="col-md-4">
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} height="200" width="250"/>
                    </div>
                    </div>

                )}
                </div>

            </div>
        </center>
    )

}
export default Gallery