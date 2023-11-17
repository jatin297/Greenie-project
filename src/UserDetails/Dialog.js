import React, { useState } from "react";

interface DialogProps {
  rowData: {
    username: string,
    id: string,
    phone: string,
    creationDate: string,
    email: string,
  };
  handleClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ rowData, handleClose }) => {
  const [showDialog, setShowDialog] = React.useState(true);
  const [displayData, setDisplayData] = useState("");
  const [headingData, setHeadingData] = useState(
    "Do you want to generate data?"
  );

  return (
    <>
      {showDialog ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-1xl font-semibold">
                    <p>{headingData}</p>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowDialog(false);
                      handleClose();
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {/* Display user data based on displayData state */}
                  {displayData ? (
                    <>
                      <p>ID: {rowData.id}</p>
                      <p>Username: {rowData.username}</p>
                      <p>Email: {rowData.email}</p>
                      <p>Phone: {rowData.phone}</p>
                      <p>Creation date: {rowData.creationDate}</p>
                    </>
                  ) : (
                    "Generated data will be shown here."
                  )}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowDialog(false);
                      handleClose();
                    }}
                  >
                    Close
                  </button>
                  {/* Update the onClick handler to set the displayData state */}
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setHeadingData("Sure here it is.");
                      setDisplayData(
                        `ID: ${rowData.id}\nUsername: ${rowData.username}\nEmail: ${rowData.email}\nPhone: ${rowData.phone}\nCreation date: ${rowData.creationDate}`
                      );
                    }}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Dialog;
