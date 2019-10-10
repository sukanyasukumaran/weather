import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownComponent = props => (
  <div>
    <p>{props.heading} :</p>
    <Dropdown
      placeholder={props.placeholder}
      search
      selection
      options={props.dropdownData}
    />
  </div>
);
export default DropdownComponent;
