import React from "react";
import { Tabs, Tab } from "./Tabs";
import { Account } from "./AccountCreation/Account";
import { User } from "./UserDetails/User";

const App = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Account Creation">
          <div className="py-4">
            <Account />
          </div>
        </Tab>
        <Tab label="User Details">
          <div className="py-4">
            <User />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
