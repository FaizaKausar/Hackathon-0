"use client";
import React, { useEffect, useState } from "react";
import View from "./view";
import { MyImage } from "./page";

const FavouritList = ({ resources }: { resources: MyImage[] }) => {
  const [initialState, setinitialState] = useState(resources);
  useEffect(() => {
    setinitialState(resources);
  }, [resources]);
  return (
    <div>
      <div className="columns-4 gap-4 space-y-4 mx-auto p-5"></div>
      {initialState.map((item, i) => {
        return (
          <div key={i} className="break-inside-avoid">
            <View
              src={item.public_id}
              tag={item.tags}
              fun={(publicId: string) => {
                setinitialState((current) =>
                  current.filter((val) => val.public_id !== publicId)
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavouritList;
