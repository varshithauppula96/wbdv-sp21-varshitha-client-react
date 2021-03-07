import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem =({item,
                         to,
                         updateItem,
                         deleteItem}) => {
    const [editing,setEditing] = useState(false)
    const [itemCache,setItemCache] =useState(item)
    return(
        <>
            {
                !editing &&
                <>
                    <Link to={to}>
                        {item.title}{item._id}
                    </Link>

                    <i onClick= {() => setEditing(true)} className="float-right fas fa-edit"> </i>
                </>
            }
            {
                editing &&
                <> <input
                    onChange={(e) =>setItemCache({...itemCache,title:e.target.value})}
                    value={itemCache.title}/>
                    <i onClick={()=>{
                        setEditing(false)
                        updateItem(itemCache)}}
                       className=" float-right fas fa-check"> </i>
                    <i
                        onClick={()=>deleteItem(item)
                        }
                        className=" float-right fas fa-trash"> </i>

                </>
            }


        </>)
}
export default EditableItem