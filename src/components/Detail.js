import Cart from "./Cart"

const Detail = ({listCart,deleteData}) => {
    return(
        <div>
            <p>Detail</p>
            {
                listCart.map((cart) => {
                    
                    const {id,name, price} = cart;
                    
                    return (
                        <Cart 
                        id={id}
                        name={name}
                        price={price}
                        deleteData={deleteData} />
                    );
                })
            }
        </div>
    );
}

export default Detail