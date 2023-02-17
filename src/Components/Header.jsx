import React from 'react'
import Wrapper from '../Wrappers/HeaderWrapper'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { total } = useSelector((state) => state.cart)
    const user = JSON.parse(localStorage.getItem('user'))
    const userLogged = JSON.parse(localStorage.getItem('userLogged'))




    const handleLogOut = () => {
        localStorage.removeItem('userLogged')
        dispatch(clearCart())
        navigate('/login')

    }






    return (
        <Wrapper>
            <header className='Header' >
                {/* logo */}
                <div>
                    <h1>
                        <Link to='/' className='logo' >
                            E-SHOP
                        </Link>
                    </h1>
                </div>
                {userLogged && (
                    <div>
                        <h3 style={{color:'white'}} >Welcome : {user.name}</h3>
                    </div>
                )}

                {/* info section */}
                {userLogged && (
                    <div className='Header-link' >
                    <ul className='List-item'>
                        <li>
                            <Link to='/' >HOME</Link>
                        </li>

                        <li>
                            <Link to='/cart' className='Cart' ><ShoppingCartIcon />{total}</Link>
                        </li>
                    </ul>
                    <div> <button onClick={handleLogOut} >Logout</button></div>
                </div>
                )}

            </header>
        </Wrapper>
    )
}

export default Header