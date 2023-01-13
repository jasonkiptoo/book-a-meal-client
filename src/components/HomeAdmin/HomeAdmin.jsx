import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
// import { addProduct } from "..components/HomeAdmin/ProductActions";


const HomeAdmin = () => {

    // const [productImage, setProductImage] = useState(null);
    // const { register, handleSubmit, errors } = useForm();
    // const categories = useSelector((state) => state.categories);
    // const dispatch = useDispatch();

    // const onSubmit = (data) => {
    //   const formData = new FormData();
    //   formData.append("productImage", productImage);
    //   formData.append("name", data.name);
    //   formData.append("price", data.price);
    //   formData.append("description", data.description);
    //   formData.append("categoryId", data.categoryId);
    //   formData.append("special", data.special);
    //   formData.append("availability", data.availability);
    //   dispatch(addProduct(formData));
    // };

    return (
      <h1>Home Admin</h1>
      // <div>
      //   <form>
      //     <label>Product Name:</label>
      //     <input
      //       type="text"
      //       name="name"
      //       ref={register({ required: true })}
      //     />
      //     {errors.name && <p>Product name is required</p>}

      //     <label>Price:</label>
      //     <input
      //       type="text"
      //       name="price"
      //       ref={register({ required: true })}
      //     />
      //     {errors.price && <p>Price is required</p>}

      //     <label>Description:</label>
      //     <textarea
      //       name="description"
      //       ref={register({ required: true })}
      //     />
      //     {errors.description && <p>Description is required</p>}

      //     <label>Product Image:</label>
      //     <input
      //       type="file"
      //       name="productImage"
      //       onChange={(e) => setProductImage(e.target.files[0])}
      //       ref={register({ required: true })}
      //     />
      //     {errors.productImage && <p>Product image is required</p>}

      //     <label>Category:</label>
      //     <select name="categoryId" ref={register({ required: true })}>
      //       {categories.map((category) => (
      //         <option key={category.id} value={category.id}>
      //           {category.name}
      //         </option>
      //       ))}
      //     </select>
      //     {errors.categoryId && <p>Category is required</p>}

      //     <label>Today's Special:</label>
      //     <input
      //       type="checkbox"
      //       name="special"
      //       ref={register}
      //     />

      //     <label>Availability:</label>
      //     <input
      //       type="checkbox"
      //       name="availability"
      //       ref={register}
      //     />

      //     <input type="submit" value="Save Product" />
      //   </form>
      //   {productImage && (
      //    <img src={URL.createObjectURL(productImage)} alt="Product Image" width="200" height="200" />
      //    )}
      //  </div>

    )}
      export default HomeAdmin;
