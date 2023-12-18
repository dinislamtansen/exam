import React from 'react'

const SearchBar = () => {
  return (
    <div>
       
        <div className=' my-5 flex justify-center'>
        <input className=" bg-slate-300 text-black rounded-md mx-5 px-2 " type="search" name="" id="" />
        <div>
            <label htmlFor="search"></label>
            <select name="" id="">
                <option value="">Electronics</option>
                <option value="">Jewelry</option>
                <option value="">Mobile</option>
                <option value="">Clothing</option>
                <option value="">Mens</option>
            </select>
        </div>
        </div>
        
    </div>
  )
}

export default SearchBar