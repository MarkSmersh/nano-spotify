import React, { FC } from "react";
import { Bell, Clock, Settings } from "react-feather";

interface pageProps {}



const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Good morning</h1>
        <div className="flex gap-4">
          <Bell />
          <Clock />
          <Settings />
        </div>
      </div>
      <div className="grid-cols-4">

      </div>
    </div>
  );
};

export default page;
