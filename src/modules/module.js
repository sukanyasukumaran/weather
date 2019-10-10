import React from "react";
import ButtonComponent from "./Components/Button/Button";
import DropdownComponent from "./Components/Dropdown/Dropdown";
import dropdownData from "./dropdownData";

class Module extends React.Component {
  state = {
    dropdown: {
      placeholder: "Country"
    }
  };

  dropdownData = [
    {
      key: 1,
      text: "india",
      value: "India"
    },
    {
      key: 2,
      text: "canada",
      value: "Canada"
    }
  ];

  render() {
    return (
      <div>
        <DropdownComponent
          heading="Select Country"
          placeholder={this.state.dropdown.placeholder}
          dropdownData={this.dropdownData}
        />
        <DropdownComponent
          heading="Select State"
          placeholder="State"
          dropdownData={this.dropdownData}
        />
        <ButtonComponent buttonName= "search" />
      </div>
    );
  }
}

export default Module;
