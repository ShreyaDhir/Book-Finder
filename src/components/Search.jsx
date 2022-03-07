import { data } from "autoprefixer";
import React, { useState } from "react";

const Search = () => {
  const [search, isSearch] = useState('');

  return (
    <div className="flex justify-center">
      <div className="relative pt-36 xl:w-95">
        <h2 htmlFor="search">Search your books</h2>
        <div className="form-control flex border-0">
          <input
            type="search"
            placeholder="Search"
            className="input-control p-2 transition ease-in-out m-0 border-2 border-slate-200 rounded focus:text-gray-700 focus:bg-white focus:shadow-slate-100 focus:outline-none"
          ></input>
          <button 
            type="button" 
            onSubmit={(e)=> {data.e.target}}
            className="flex flex-row btn bg-blue-600"
          >
            <ion-icon name="search"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
