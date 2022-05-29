const Item = ({addItem, name, price, id}) => {
    function addToCart(){
        addItem((prev) => {
            return [...prev, {name, price, id}]
        })
    }
    return(
        <div>
            <div className="item">
                <p>{name}</p>
                <p>RM {price}</p>
                <button onClick={addToCart}>Add to Cart</button >
            </div>
        </div>
    )
}

export default Item