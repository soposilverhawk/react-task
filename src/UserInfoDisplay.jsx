import React from "react";

function UserInfoDisplay({ formData }) {
  return (
    <div className="user-info-display">
      <pre>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}

export default UserInfoDisplay;
