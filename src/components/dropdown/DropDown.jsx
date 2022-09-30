import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

import "./dropdown.css";

function DropDown({ label, fieldType, iconX, widthx = "100%", myData }) {
  const [selected, setSelected] = useState("");
  const options = ["one", "two", "three"];
  const defaultOption = options[1];
  return (
    <>
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
          ),
          inputProps: {
            list: "supplierData",
          },
        }}
      />

      {/*     
      <div className="setlectcontainer">
        <input
          list="supplierData"
          placeholder="اسم المورد"
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        />
        <datalist id="supplierData">
          {supplier.map((item) => {
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
      <h4>{selected}</h4> */}
    </>
  );
}

export default DropDown;
const ItemInmenu = ({ item, itemValue }) => {
  return (
    <>
      <option value={itemValue}>{item}</option>
    </>
  );
};
