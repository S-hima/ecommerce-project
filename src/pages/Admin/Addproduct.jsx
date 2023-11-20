import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
  const [inputValue, SetInputValue] = useState({
    name: "",
    price: "",
    description: "",
    category: "",

  })
  const handleChange = (e) => {
    SetInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })

  }
  const navigate = useNavigate()
  const handleaddproduct = (e) => {
    e.preventDefault();
    axios.post('https://achyut.acetechnepal.com/products/', inputValue)
      .then(() => {
        console.log("successful")
        navigate("/dashboard/product");
        // toast("login Sucessfully");


      })
  }
  return (
    <div className=' w-[400px] h-[600px] mt-8 shadow-lg mx-auto border border-gray-300' >
      <section className="bg-[#F3F4F5] ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full mt-10 bg-white rounded-lg shadow  md:mt-10 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Add Products
              </h1>
              <form onSubmit={handleaddproduct}

                className="space-y-4 md:space-y-6"
                action="#"
              >

                <div>
                  <label
                    htmlFor="Productname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Productname
                  </label>
                  <input value={inputValue.name} onChange={handleChange}


                    required
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="productname"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Price
                  </label>
                  <input value={inputValue.price} onChange={handleChange}
                    type='number'
                    required
                    name="price"
                    id="price"
                    placeholder="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />

                </div>



                <div>
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Description
                  </label>
                  <input value={inputValue.description} onChange={handleChange}
                    required
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="description"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <input value={inputValue.category} onChange={handleChange}


                    required
                    type="text"
                    name="category"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="category"
                  />
                </div>


                <button
                  type="Addproducts"

                  className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white
                                      focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  "
                >

                  Addproducts
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addproduct