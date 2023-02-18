import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Benefits() {
  return (
    <div className="mb-12 flex items-start justify-between bg-[#f5f6f9] px-3.5 pt-5 pb-5">
      <div className="">
        <a
          href=""
          className="font-body mb-2 font-semibold hover:text-[#ee0000]"
        >
          <LocalShippingIcon
            style={{ color: "#ee0000", marginRight: "10px" }}
          />
          Free shipping
        </a>
        <p className="font-body max-w-xs text-base font-normal">
          When ordering from 400$ and weighing no more than 5kg
        </p>
      </div>
      <div className="">
        <a
          href=""
          className="font-body mb-2 font-semibold hover:text-[#ee0000]"
        >
          <AssignmentReturnIcon
            style={{ color: "#ee0000", marginRight: "10px" }}
          />
          Return of goods 120 days
        </a>
        <p className="font-body max-w-xs text-base font-normal">
          Partial or full refund within 120 days
        </p>
      </div>
      <div className="">
        <a
          href=""
          className="font-body mb-2 font-semibold hover:text-[#ee0000]"
        >
          <WifiCalling3Icon style={{ color: "#ee0000", marginRight: "10px" }} />
          Quick order by phone
        </a>
        <p className="font-body max-w-xs text-base font-normal">
          To quickly place an order, call the numbers provided on the site
        </p>
      </div>
      <div className="">
        <a
          href=""
          className="font-body mb-2 font-semibold hover:text-[#ee0000]"
        >
          <WorkspacePremiumIcon
            style={{ color: "#ee0000", marginRight: "10px" }}
          />
          100% genuine goods
        </a>
        <p className="font-body max-w-xs text-base font-normal">
          Only genuine products of the world's leading brands
        </p>
      </div>
    </div>
  );
}

export default Benefits;
