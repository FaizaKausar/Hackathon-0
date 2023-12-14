import React from "react";
import Upload from "./upload";
import cloudinary from "cloudinary";
import View from "./view";
interface MyImage {
  public_id: string;
  tags: string[];
}
const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("public_id", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between">
        <h2 className=" text-3xl font-semibold tracking-tight">GALLERY</h2>
        <Upload />
      </div>
      <div className="columns-4 gap-4 flex space-y-4 mx-auto p-5"></div>
      {res.resources.map((item, i) => {
        return (
          <div key={i} className=" w-1/2 flex flex-row">
            <View src={item.public_id} tag={item.tags} fun={undefined} />
          </div>
        );
      })}
    </>
  );
};

export default Page;
