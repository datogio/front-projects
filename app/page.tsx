"use client";

import { signOut } from "@/actions";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut()
      .then(() => {
        router.push("/auth/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cursor-pointer" onClick={handleSignOut}>
      Sign Out
    </div>
  );
}
