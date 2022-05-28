import React from 'react';
import Item from './Item';

const ItemMenu = ({item, itemList}) =>{
    console.log('from item menu',itemList)
    return(
        <div className='menu'>
        {
            itemList.map((itemInMenu) => (
                <Item addItem={item} updateItem={itemInMenu}/>
            ))
        }
            
        </div>
    )
}

export default ItemMenu