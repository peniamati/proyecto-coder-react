import cart from "../assets/cart.png"

export const CartWidget = () => {
  return (
  <> 
  <img src={cart} alt="cart"  width={35}/>
  <span> 5 </span>
  </>
  );
}