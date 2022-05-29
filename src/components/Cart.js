const Cart = ({name, price, id, deleteData}) =>{

    function deleteCart(){
        deleteData(function(prev){
            console.log('from function', prev)
            return this.prev.filter(cart => cart.id !== id)
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