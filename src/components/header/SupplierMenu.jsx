import React, {useContext} from "react";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import { MainContext } from "../../helper/context";
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
          <AttachMoneyOutlinedIcon />
          <p>دفع فاتورة</p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("StatmentSupplier")
          }}
          className="items"
        >
          <BalanceOutlinedIcon />
          <p>كشف رصيد مورد</p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AllStatmentSupplier")
          }}
          className="items"
        >
          <MailLockOutlinedIcon />
          <p>ارصدة الموردين</p>
        </div>
      </div>
    </>
  );
}

export default SupplierMenu;
