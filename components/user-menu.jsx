"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-30 h-30",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Event"
          href="/events"
          labelIcon={<ChartNoAxesGantt size={15} />}
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
