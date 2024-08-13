import React from 'react';

const FoodCart = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <>
            <div className="card w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <p className='absolute right-0 mr-4 mt-4 px-1 bg-slate-900 text-white'>{price}</p>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCart;