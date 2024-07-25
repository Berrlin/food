import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experence, one delicious meal at a time</p>
        <div className="explore-menu-list">
            {menu_list.map((index)=>{
                return(
                    <div onClick={()=>setCategory(prev =>prev===index.menu_name?"All":index.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===index.menu_name?"active":""} src={index.menu_image} alt="" />
                        <p>{index.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu