import React from 'react';
import Item from './Item';


const ItemMenu = ( listItem ) =>{

    return(
        <div className='menu'>
            {
                listItem.map( item =>{
                    const {name} = item
                    return(
                        <Item name={item.data.name}   />
                    )
                })
            }
        </div>
    )
}

export default ItemMenu