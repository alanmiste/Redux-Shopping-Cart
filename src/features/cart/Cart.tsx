import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import styles from "./Cart.module.css";
import { getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";

export function Cart() {
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector(getTotalPrice);
  const dispatch = useAppDispatch();

  function onQuantityChanged(e: React.FocusEvent<HTMLInputElement>, id: string) {
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }
  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  className={styles.input}
                  defaultValue={quantity}
                  onBlur={(e) => onQuantityChanged(e, id)} />
              </td>
              <td>{products[id].price}</td>
              <td>
                <button
                  aria-label={`Remove ${products[id].name} from Shopping Cart`}
                  onClick={() => dispatch(removeFromCart(id))}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form>
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
