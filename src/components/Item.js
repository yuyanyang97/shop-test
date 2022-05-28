const Item = ({addItem, updateItem}) => {
    function addToCart(){
        addItem((prev) => {
            return [...prev,{updateItem}]
        })
        console.log('Form Item',(updateItem.id))
    }
    return(
        <div>
            <div className="item">
                <p>{updateItem.name}</p>
                <p>RM {updateItem.price}</p>
                <button onClick={addToCart}>Add to Cart</button >
            </div>
        </div>
    )
}

export default Item