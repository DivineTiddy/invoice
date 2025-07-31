'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="cursor-pointer md:hidden">
      <Image src="/icon/back-arrow.svg" alt="Back" width={24} height={24} />
    </button>
  );
}
