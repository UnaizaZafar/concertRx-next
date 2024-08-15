import React from "react";
import { useState } from "react";
const MultipleStates = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const handleClear = (event) => {
    console.log("form cleared");
    setEmail("");
    setFname("");
    setLname("");
  };
  const handleSubmit = (event) => {
    console.log("form submitted");
    event.preventDefault();
  };

  return (
    <>
      <div className="h-full p-10  text-green-800 bg-gray-100 gap-4 flex items-center justify-evenly">
        <h1 className="text-5xl font-bold">Using Multiple States</h1>

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
                value={fname}
                onChange={(e) => setFname(e.target.value)}
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
                value={lname}
                onChange={(e) => setLname(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {fname}
          </div>
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="" className="italic text-sm font-light">
              Last Name{" "}
            </label>
            {lname}
          </div>
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="" className="italic text-sm font-light">
              Email{" "}
            </label>
            {email}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleStates;
