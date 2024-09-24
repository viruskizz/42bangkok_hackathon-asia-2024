"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { create, put, User } from "@/lib/actions/user";
import React from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [username, setUsername] = React.useState<string>("");
  const handleClickUser = async () => {
    const payload: Partial<User> = {
      name: encodeURI(username),
      role: "CLIENT",
    };
    const data = await put(payload);
    localStorage.setItem("name", encodeURI(username));
    router.push("/order");
  };
  const handleClickRider = async () => {
    const payload: Partial<User> = {
      name: encodeURI(username),
      role: "RIDER",
    };
    const data = await put(payload);
    localStorage.setItem("name", encodeURI(username));
    router.push("/jobs");
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-12">
      <Input
        placeholder="username"
        className="w-28"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <div className="flex justify-center gap-4">
        <Button
          variant={"outline"}
          onClick={async () => await handleClickUser()}
        >
          User
        </Button>
        <Button
          variant={"outline"}
          onClick={async () => await handleClickRider()}
        >
          Rider
        </Button>
      </div>
    </div>
  );
}
