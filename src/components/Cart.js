const Cart = ({name,price,id, deleteData}) =>{
    console.log('from cart',{name})

    function deleteCart(){
        deleteData(function(prev){
            return prev.filter(cart => cart.id !== id)
        })
    }
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={deleteCart}>x</button>
        </div>
    )
}
export default Cart