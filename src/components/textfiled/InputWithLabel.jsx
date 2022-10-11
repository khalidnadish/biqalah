import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
function InputWithLabel({
  label,
  fieldType,
  iconX,
  widthx = "100%",
  disableToggle = false,
  value = undefined,
  setValue,

  initialValue = "",
  reload = () => console.log("test text"),
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClear = () => {
    setValue("");
  };

  useEffect(() => {
    setValue((pre) => initialValue);
  }, [initialValue]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <TextField
          type={fieldType}
          value={value}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") reload();
          }}
          size="small"
          disabled={disableToggle}
          placeholder={label}
          InputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
              width: widthx,
              p: 1,
            },
            startAdornment: (
              <InputAdornment position="start">{iconX}</InputAdornment>
            ),
            endAdornment: value != "" && (
              <InputAdornment position="end">
                <Box sx={{ cursor: "pointer" }} onClick={() => handleClear()}>
                  <ClearIcon />
                </Box>
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
              width: widthx,
            },
          }}
          sx={{
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "800",
            width: widthx,
          }}
        />
      </Box>
    </>
  );
}
export default InputWithLabel;
