import React from "react";

import "./Form.css";

const Form = (props) => {
  return (
    <div className="form">
      <h3 className="search-text">Search Crypto : &nbsp;</h3>
      <form>
        <input
          className="input"
          type="text"
          placeholder="enter coin"
          value={props.inputs}
          onChange={props.handleChangeInput}
        />
      </form>
    </div>
  );
};

export default Form;
