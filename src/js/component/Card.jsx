import React from "react";


const Card = (props) => {
    return (
        <div className="text-center">
            <div className="card">
                <img src="https://dummyimage.com/400x325/000/fff" className="img-fluid card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.buttonURL} className="btn btn-primary">{props.label}</a>
                </div>
            </div>
        </div>
    );
};
export default Card;