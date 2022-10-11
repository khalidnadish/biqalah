import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FormType = ({ actionForm }) => {
  // alert(actionForm);
  let formLabel;
  let labelcolor;
  switch (actionForm) {
    case "A":
      formLabel = "مورد جديد";
      labelcolor = "primary.dark";
      break;
    case "U":
      formLabel = "تعديل مورد";
      labelcolor = "warning.dark";
      break;
    case "D":
      formLabel = "حذف مورد";
      labelcolor = "error.dark";
      break;

    default:
      break;
  }

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "-10px",
          right: "10px",
          bgcolor: labelcolor,
          color: "background.paper",
          px: 2,
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
          {formLabel}
        </Typography>
      </Box>
    </>
  );
};
export default FormType;
