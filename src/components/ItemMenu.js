import React from 'react';
import Item from './Item';

const ItemMenu = ({item, itemList}) =>{
    return(
        <div className='menu'>
        {
            itemList.map((itemInMenu) => {
                const {name, price, id} = itemInMenu;
                return <Item addItem={item} name={name} price={price} id={id}/>
            })
        }
            
        </div>
    )
}

export default ItemMenu