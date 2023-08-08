import React from "react";
import Userchat from "./Userchat";
import Messagesbox from "./Messagesbox";

const Main1 = () => {
  return (
    <>
      <div>
        <Userchat name={"Test One"}/>
        <Messagesbox />
      </div>
    </>
  );
};

export default Main1;