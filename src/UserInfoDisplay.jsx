import React from "react";

function UserInfoDisplay({ submittedData }) {
  return (
    <div className="user-info-display">
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
}

export default UserInfoDisplay;
