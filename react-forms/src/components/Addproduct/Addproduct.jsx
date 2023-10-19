import React, { useState } from 'react';
import "./Addproduct.css"
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };
console.log(formData);
   return (
   <>
    <h1>
      Add Product
    </h1>
      <div className="form">
        <span className="form_text">Add Product</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form_input" />
          <input type="text" name="description" placeholder="Description" value={formData.description } onChange={handleChange} className="form_input" />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="form_input" />
          <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="form_input" />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="form_input"/>
          <div className='btn-ctn'>
          <button type="submit" className="form_button">SUBMIT</button>
          
          </div>

        </form>
      </div>
   </>
    );
};

export default AddProduct;