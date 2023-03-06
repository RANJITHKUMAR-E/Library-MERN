import Table from "../components/Table";
import React from "react";

const Library = () => {
  return (
    <>
      <h1 className="text-center my-5">Your Library</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="search">
          <input
            type="text"
            class="search-input"
            placeholder="Search..."
            name=""
          />
          <a href="#" class="search-icon">
            {" "}
            <i class="fa fa-search"></i>{" "}
          </a>{" "}
        </div>
      </div>
      <div className="table-content">
        <div className="table-responsive my-5">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Library;
