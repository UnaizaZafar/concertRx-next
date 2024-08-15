import React from "react";
import { useState } from "react";

const ObjectStates = () => {
  const [formData, setForm] = useState({
    firstName: "",
    LastName: "",
    Email: "",
  });
  const handleClear = (event) => {
    console.log("form cleared");
    setForm('');
  };
  const handleSubmit = (event) => {
    console.log("form submitted");
    event.preventDefault();
  };
    const handleValues=(fieldName,newValue)=>{
      setForm( prevData=>({
          ...formData,
          [fieldName]:newValue
        }))
    }

  
    return (
      <>
        <div className="h-full p-10  text-green-800 bg-gray-100 gap-4 flex items-center justify-evenly">
          <h1 className="text-5xl font-bold">Using Object Variable States</h1>

          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Form</h1>
            <form
              className="flex flex-col gap-2 justify-between"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="fname" className="italic text-sm font-light">
                  First Name{" "}
                </label>
                <input
                  value={formData.firstName}
                  onChange={(e)=>handleValues('firstName',e.target.value)}
                  className="border rounded  text-sm p-2"
                  placeholder="Enter First Name"
                  type="text"
                />
              </div>
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="lname" className="italic text-sm font-light">
                  Last Name{" "}
                </label>
                <input
                  value={formData.LastName}
                  onChange={(e)=>handleValues('LastName',e.target.value)}
                  className="border rounded  text-sm p-2"
                  placeholder="Enter Last Name"
                  type="text"
                />
              </div>
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="email" className="italic text-sm font-light">
                  Email{" "}
                </label>
                <input
                  value={formData.Email}
                  onChange={(e)=>handleValues('Email',e.target.value)}
                  className="border rounded  text-sm p-2"
                  placeholder="Enter Email"
                  type="email"
                />
              </div>
              <div className="flex justify-evenly">
                <button
                  type="reset"
                  value="Reset"
                  className="buttonStyle"
                  onClick={handleClear}
                >
                  Clear/Reset
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Data</h1>
            <div className="flex justify-between items-center gap-2">
              <label htmlFor="" className="italic text-sm font-light">
                First Name{" "}
              </label>
              {formData.firstName}
            </div>
            <div className="flex justify-between items-center gap-2">
              <label htmlFor="" className="italic text-sm font-light">
                Last Name{" "}
              </label>
              {formData.LastName}
            </div>
            <div className="flex justify-between items-center gap-2">
              <label htmlFor="" className="italic text-sm font-light">
                Email{" "}
              </label>
              {formData.Email}
            </div>
          </div>
        </div>
      </>
    );
  }

export default ObjectStates;
