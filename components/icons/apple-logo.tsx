import { cn } from "@/lib/utils";

function AppleLogo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-4 shrink-0 bg-current", className)}
      style={{
        WebkitMaskImage: "url(/icons/apple-logo.png)",
        maskImage: "url(/icons/apple-logo.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      {...props}
    />
  );
}

export { AppleLogo };
