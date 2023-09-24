import { useState } from "react";
import instance from "../../../hooks/useAxiosInstance";
import { useShopContext } from "../../../provider/ContextProvider";
import ToggleButton from "../../Button/ToggleButton";

const BuyerSellerToggler = () => {
  const { user, setUser } = useShopContext();
  console.log(user.role);
  const [isChecked, setIsChecked] = useState(
    user.role === "seller" ? true : false
  );

  const handleChangeRole = async (role: "seller" | "buyer") => {
    // TODO: have make the confirm dialog fancy.
    const permission = confirm(
      `Are you sure you want to be a ${role.toUpperCase()}?`
    );
    if (!permission) return;

    const res = await instance.put("/user", { email: user.email, role });

    if (res.status !== 200) return alert("something wrong");

    console.log(res);
    // update the user state
    setUser({ ...user, role: res.data.role });
    if (res.data.role === "seller") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  return (
    <li className="mt-10 flex border-t border-t-slate-300 items-center justify-start gap-2 px-2">
      {/* search toggle-btn style in index.css */}
      <span
        onClick={() => isChecked === true && handleChangeRole("buyer")}
        className="font-semibold cursor-pointer"
      >
        Be a Buyer
      </span>{" "}
      <ToggleButton isChecked={isChecked} handleChangeRole={handleChangeRole} />
      <span
        onClick={() => isChecked === false && handleChangeRole("seller")}
        className="font-semibold cursor-pointer"
      >
        Be a Seller
      </span>{" "}
    </li>
  );
};

export default BuyerSellerToggler;
