import React from "react";

// components

import CardTable from "components/Cards/CardTableUsers.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTable />
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;
