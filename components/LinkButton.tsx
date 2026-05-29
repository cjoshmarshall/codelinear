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
        "group font-chivo-mono text-xs lg:text-sm text-light-blue",
        className,
      )}
    >
      <span className=" relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
        <span className="flex flex-row gap-2  items-center">
          {children}
          <ArrowRight height={20} />
        </span>
      </span>
    </Link>
  );
}
