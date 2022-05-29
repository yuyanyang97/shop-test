import Cart from "./Cart"

const Detail = ({listCart,deleteData}) => {
    const total_ini = 0;
      const subtotal = listCart.map(amount => amount.price)
      .reduce( (total, amount) => total + amount, total_ini );
    return(
        <div>
            <p>Detail</p>
            {
                listCart.map((cart) => {
                    const {name, price, id} = cart;
                    return  <Cart name={name} price={price} id={id} deleteData={deleteData} />
                })
            }
            
            {subtotal}
            
        </div>
    )
}

export default Detail