import React from "react";

const All_Trains = () => {
  return (
    <>
      <section className="showcase login">
        <div className="showcase-overlay">
          <form className="form-control">
            <input
              type="text"
              name="from"
              id="from"
              placeholder="From"
              required
            />
            <input
              type="text"
              name="to"
              id="to"
              placeholder="To"
              required
            />
            <input
              type="text"
              name="train"
              id="train"
              placeholder="Search Train by Name"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default All_Trains;
