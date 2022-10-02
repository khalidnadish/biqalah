import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

import "./dropdown.css";

function DropDown({ label, fieldType, iconX, widthx = "100%", myData }) {
  const [selected, setSelected] = useState("");
  const options = ["one", "two", "three"];
  const defaultOption = options[1];
  return (
    <>
      <div className="dropdown">
        <TextField
          variant="outlined"
          name="rfc"
          size={"small"}
          placeholder={label}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          InputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
              width: "100%",
            },
            startAdornment: (
              <InputAdornment position="start">{iconX}</InputAdornment>
            ),
            endAdornment: (
              <div className="dropdownData">
                <datalist id="supplierData">
                  {myData.map((item) => {
                    return (
                      <React.Fragment key={item.id}>
                        <ItemInmenu
                          item={item.supplierName}
                          itemValue={item.salesName}
                        />
                      </React.Fragment>
                    );
                  })}
                </datalist>
              </div>
            ),
            inputProps: {
              list: "supplierData",
            },
          }}
        />
      </div>
    </>
  );
}

export default DropDown;
const ItemInmenu = ({ item, itemValue }) => {
  return (
    <>
      <option className="dropdownData" value={itemValue}>
        {item}
      </option>
    </>
  );
};
