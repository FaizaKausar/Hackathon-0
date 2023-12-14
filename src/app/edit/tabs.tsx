"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {
  return (
    <Tabs defaultValue="original" className="w-full px-5 py-4">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Grayscale</TabsTrigger>
        <TabsTrigger value="oilPaint">OilPaint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
      </TabsList>
      {/*Original*/}
      <TabsContent value="original">
        <div className="flex gap-6 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/*Blur*/}
      <TabsContent value="blur">
        <div className="flex gap-6 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            blur={800}
          />
        </div>
      </TabsContent>
      {/*Grayscale*/}
      <TabsContent value="gray">
        <div className="flex gap-6 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
          />
        </div>
      </TabsContent>
      {/*OilPaint*/}
      <TabsContent value="oilPaint">
        <div className="flex gap-6 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
          />
        </div>
      </TabsContent>
      {/*Improve*/}
      <TabsContent value="improve">
        <div className="flex gap-6 items-center justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            improve={true}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
