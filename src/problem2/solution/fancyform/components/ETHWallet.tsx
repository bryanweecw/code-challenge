import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ETHWallet() {
  //States for Form Validation
  const [OTPSent, setOTPSent] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [OTPString, setOTPString] = useState("");

  // States for Displaying Elements
  const [showAddressState, setShowAddressState] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [isAddressSelected, setIsAddressSelected] = useState(false);

  // Default Expected Values
  const addressExpected = "f4ke4ddr3ss4y0u";
  const [accountBalance, setAccountBalance] = useState(10);
  const OTPExpected = "78993";

  // Validation Function
  const validateForm = (
    OTPState: boolean,
    AddressSelectedState: boolean,
    SubmittedBalance: number,
    AddressString: string,
    GivenOTPString: string
  ) => {
    if (
      OTPState &&
      OTPString == GivenOTPString &&
      AddressSelectedState &&
      AddressString == addressExpected &&
      SubmittedBalance <= accountBalance
    ) {
      setAccountBalance(accountBalance - SubmittedBalance);
      toast(
        "Sent " +
          SubmittedBalance +
          " ETH to " +
          AddressString +
          " with OTP " +
          OTPString
      );
    } else {
      let error_msg = "Failed with: ";
      if (AddressString != addressExpected) {
        error_msg += "Invalid Address, ";
      }
      if (OTPString != OTPExpected) {
        error_msg += "Invalid OTP, ";
      }
      if (SubmittedBalance > accountBalance) {
        error_msg += "Not Enough Balance for Transaction, ";
      }
      error_msg += "please try again.";
      toast(error_msg);
    }
  };

  useEffect(() => {
    if (searchString.length != 0) {
      let length = searchString.length;
      console.log("hello");
      console.log(searchString);
      console.log(addressExpected.slice(0, length));
      setShowAddressState(searchString == addressExpected.slice(0, length));
      console.log(showAddressState);
    } else {
      setShowAddressState(false);
    }
    if (searchString != addressExpected) {
      if (isAddressSelected) {
        setIsAddressSelected(false);
        setSelectedAddress("");
      }
    }
  }, [searchString]);

  return (
    <>
      <div className="font-bold mb-3 px-2">ETH Wallet Selected:</div>
      {showSearchBar ? (
        <>
          <input
            value={searchString}
            type="text"
            placeholder="Lookup ETH Wallet Address"
            className="border drop-shadow-sm px-5 py-4 text-left bg-white border-blue w-full h-auto"
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          ></input>
        </>
      ) : (
        <></>
      )}
      {showAddressState ? (
        <button
          className="flex pointer-events-auto border drop-shadow-sm px-2 py-1 rounded-md text-left bg-white border-blue w-full"
          onClick={(e) => {
            e.preventDefault;
            setSearchString(addressExpected);
            setSelectedAddress(addressExpected);
            setShowAddressState(true);
            setShowSearchBar(!showSearchBar);
            if (!isAddressSelected) {
              setIsAddressSelected(true);
            }
          }}
        >
          <div className="flex items-center w-full">
            <div className="h-20 w-20 rounded-full xs:h-16 xs:w-16">
              <img
                src="/photo.jpeg"
                className="object-contain overflow-hidden rounded-full"
              ></img>
            </div>
            <div className="h-20 flex items-center flex-grow justify-left px-5 xs:pl-2 xs:text-xs">
              <p>
                f4ke4ddr3ss4y0u
                <br />
              </p>
            </div>
          </div>
        </button>
      ) : (
        <></>
      )}
      {isAddressSelected ? (
        <>
          <div className="font-bold my-3 px-2">Amount to send:</div>
          <input
            type="number"
            value={selectedAmount}
            placeholder="Amount to send"
            inputMode="decimal"
            pattern="\d*"
            step={0.000000000000000001}
            onChange={(e) => {
              e.preventDefault;
              //prevents invalid characters from resetting field.
              setSelectedAmount(parseFloat(e.target.value));
            }}
            className="border drop-shadow-sm px-5 py-4 text-left bg-white border-blue w-full h-auto"
          ></input>
          {OTPSent ? (
            <>
              <div className="font-bold my-3 px-2">OTP:</div>
              <input
                placeholder="OTP"
                value={OTPString}
                onChange={(e) => {
                  setOTPString(e.target.value);
                }}
                className="border drop-shadow-sm px-5 py-4 text-left bg-white border-blue w-full h-auto"
              ></input>
            </>
          ) : (
            <button
              className="bg-slate-300 rounded-xl px-3 py-2 mt-5 hover:bg-green-400"
              onClick={() => {
                setOTPSent(true);
              }}
            >
              Send OTP
            </button>
          )}
        </>
      ) : (
        <></>
      )}
      <div className="w-full h-auto flex justify-end">
        <button
          className=" bg-green-300 rounded-xl px-3 py-2 mt-5 hover:bg-green-400"
          onClick={(e) => {
            e.preventDefault;
            validateForm(
              OTPSent,
              isAddressSelected,
              selectedAmount,
              selectedAddress,
              OTPExpected
            );
          }}
        >
          Submit
        </button>
      </div>
      <div className="relative w-full pt-2 text-right text-xs">
        Your Balance: {accountBalance} ETH
      </div>
    </>
  );
}
