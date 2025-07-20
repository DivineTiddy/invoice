"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import Image from "next/image";

const LogoUploader: React.FC = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="mt-4 flex items-center justify-center w-[80px] h-[80px] rounded-full border border-[#E4E4E4] cursor-pointer overflow-hidden"
      >
        {logoPreview ? (
          <Image
            src={logoPreview}
            alt="Uploaded Logo"
            width={80}
            height={80}
            className="object-cover"
          />
        ) : (
          <Image
            src="/icon/photograph.svg"
            alt="Upload Icon"
            width={24}
            height={24}
          />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  );
};

export default LogoUploader;
