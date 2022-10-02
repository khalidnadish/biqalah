import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./dropdown.css";

const animatedComponents = makeAnimated();
function SelectDropDown({
  myData,
  placeholder1,
  noOptionsMessage1 = "NO DATA",
  value,
  setValue,
}) {
  const [selectedOption, setSelectedOption] = useState([]);

  const options = myData.map((d) => ({
    value: d.id,
    label: d.supplierName,
  }));

  function customTheme(theme) {
    return {
      ...theme,
      colors: { ...theme.colors, primary25: "orange", primary: "green" },
    };
  }

  const handleChange = (event) => {
    setValue(event.label);
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "100%",
      borderBottom: "1px dotted pink",
      //   color: state.selectProps.menuColor,
      padding: 20,
      background: "red",
      overflow: "hidden",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: "100%",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <div className="style-select">
        <Select
          components={animatedComponents}
          onChange={handleChange}
          options={options}
          isSearchable
          placeholder={placeholder1}
          theme={customTheme}
          noOptionsMessage={() => noOptionsMessage1}
          // styles={customStyles}
          width="100%"
          menuColor="red"
        />
      </div>
    </>
  );
}

export default SelectDropDown;
