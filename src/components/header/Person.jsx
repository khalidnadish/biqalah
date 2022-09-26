import React ,{useContext}from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { MainContext } from "../../helper/context";
function Person() {
  const {modex, setModex} = useContext(MainContext);
  const handlemode=()=>{
    setModex(modex==="light" ? "dark" : "light");
  }
  return (
    <>
      <div className="Profilesetting">
        <div className="items">
          <InfoOutlinedIcon color={"primary"} />
          <p>الرقم الضريبي</p>
        </div>

        <div className="items">
          <LanguageOutlinedIcon />
          <p>تغيير اللغة</p>
        </div>
        <div className="items" onClick={handlemode}>
          <SettingsBrightnessOutlinedIcon />
          {modex==="light" ? <p>الوضع اليلي</p> : <p>الوضع النهاري</p>} 
        </div>
      </div>
    </>
  );
}

export default Person;

