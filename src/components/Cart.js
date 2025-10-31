import { useCart } from "../context/CartContext"; // ✅ import from context

export const Cart = () => {
  // Get cart items and total amount from context
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {/* If no items in cart */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some delicious food 😋</p>
      ) : (
        <>
          {/* List all cart items */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    width="80"
                    height="60"
                    style={{ marginRight: "15px", borderRadius: "8px" }}
                  />
                  <div>
                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                    <p style={{ margin: "5px 0" }}>
                      Price: Rs. {item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <strong>Rs. {item.price * item.quantity}</strong>
              </li>
            ))}
          </ul>

          {/* Total Amount */}
          <h3 style={{ textAlign: "right", marginTop: "20px" }}>
            Total Amount: Rs. {totalAmount}
          </h3>
        </>
      )}
    </div>
  );
};

