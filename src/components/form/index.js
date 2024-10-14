import { useState } from "react";

const Form = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    itemName: "",
    itemQuantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Add the new item to the list
    setItems((prevItems) => [...prevItems, formData]);
    setTotalQuantity((prevTotal) => prevTotal + Number(formData.itemQuantity));

    // Reset form data
    setFormData({
      itemName: "",
      itemQuantity: 0,
    });
  };

  return (
    <>
      <h1>List Down The Form</h1>
      <label>Item Name</label>
      <input
        name="itemName"
        type="text"
        value={formData.itemName}
        onChange={handleChange}
      />
      <br />
      <label>Item Quantity</label>
      <input
        type="number"
        name="itemQuantity"
        value={formData.itemQuantity}
        onChange={handleChange}
      />
      <br />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>

      <h2>Total Quantity: {totalQuantity}</h2>

      <ul>
        {items.length > 0 &&
          items.map((data, index) => (
            <li key={index}>
              {`${data.itemName} - ${data.itemQuantity}`}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Form;
 