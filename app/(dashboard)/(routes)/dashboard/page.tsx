import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/clerk-react";
export default function DashboardPage() {
  return (
      <div>
          <p>DashboardPage(Protected)</p>
      </div>
  );
}
