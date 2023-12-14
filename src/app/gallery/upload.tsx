"use client";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
const Upload = () => {
  // for page refresh
  const router = useRouter();
  return (
    <Button
      asChild
      className="bg-white text-black hover:bg-gray-600 hover:text-white cursor-pointer"
    >
      {/*Upload svg*/}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        {/*Upload Button Next Cloudinary*/}
        <CldUploadButton
          uploadPreset="e56zsfxt"
          onUpload={(result: UploadResult) => {
            setTimeout(() => {router.refresh()}, 1000);
          }}
        />
      </div>
    </Button>
  );
};

export default Upload;
