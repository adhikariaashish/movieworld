import React from "react";
import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} classNa
    me="hover:text-purple-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
