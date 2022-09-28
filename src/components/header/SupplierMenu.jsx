import React, {useContext} from "react";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

import { MainContext } from "../../helper/context";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
function SupplierMenu({ toggle }) {
  const { setReqlink } = useContext(MainContext);

  return (
    <>
      <div className="setting">
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AddSupplier")
          }}
          className="items"
        >
          <Diversity3OutlinedIcon color={"primary"} />
          <p>اضافة مورد</p>
        </div>

        <div
          onClick={() => {
            toggle(false);
            setReqlink("AddItem")
          }}
          className="items"
        >
          <ArchiveOutlinedIcon />
          <p>اضافة صنف</p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("PaySupplier")
          }}
          className="items"
        >
          <BorderColorIcon />
          <p>امر شراء  </p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("StatmentSupplier")
          }}
          className="items"
        >
          <SpatialAudioOffIcon />
          <p>ارسال ملاحظة </p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AllStatmentSupplier")
          }}
          className="items"
        >
          <RemoveShoppingCartIcon />
          <p>توالف</p>
        </div>
      </div>
    </>
  );
}

export default SupplierMenu;
