"use client";

import { signOut } from "@/actions";
import { useRouter } from "next/navigation";

export function SignOut() {
  const router = useRouter();

  const handleSignOut = () => {
    const confirmSignOut = confirm("Are you sure?");

    confirmSignOut &&
      signOut()
        .then(() => {
          router.push("/auth/sign-in");
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div
      className="cursor-pointer transition hover:text-gray-400"
      onClick={handleSignOut}
    >
      Sign Out
    </div>
  );
}
