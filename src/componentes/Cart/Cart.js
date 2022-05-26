import {BsMinecartLoaded} from 'react-icons/bs'

export const Cart = () => {
   return(
       <div className='icon-container'>
           <div className="cart" target="_blank">
           <BsMinecartLoaded/>
           <span id='cart_nav' className="btn btn-outline-secondary button">0</span>

           </div>
       </div>
   )
}