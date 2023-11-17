import React, { useState } from "react";

export const Account = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [sentUpdate, setSentUpdate] = useState("");
  const [displayData, setDisplayData] = useState(null);
  const [submitButton, setSubmitButton] = useState("Submit");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (userName && password && !displayData) {
      setSentUpdate("Data has been sent successfully.");
      setDisplayData({ UserName: userName, Password: password });
      setSubmitButton("Refresh");
    } else {
      setSentUpdate("");
      setDisplayData(null);
      setSubmitButton("Submit");
      setUserName("");
      setPassword("");
    }
  };

  return (
    <div>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Username
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="*********"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSubmit}
            >
              {submitButton}
            </button>
            <p className="text-green-500 text-xs italic">{sentUpdate}</p>
          </div>
        </div>
      </form>
      {/* Display user-entered data */}
      {displayData && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">User Data:</h2>
          <p>Username: {displayData.UserName}</p>
          <p>Password: {displayData.Password}</p>
        </div>
      )}
    </div>
  );
};
