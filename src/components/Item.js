const Item = ({name}) => {

    return(
        <div>
            <div className="item">
                <p>{name}</p>
                <p>Price</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Item