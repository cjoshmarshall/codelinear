import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LinkButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-chivo-mono text-xs lg:text-sm text-light-blue",
        className,
      )}
    >
      {children}
      <ArrowRight height={20}/>
    </Link>
  );
}
