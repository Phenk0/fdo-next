import { LucideExternalLink } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";

type AsideExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
};

export function AsideExternalLink({
  href,
  children,
  ...props
}: AsideExternalLinkProps) {
  return (
    <Button
      variant="link"
      nativeButton={false}
      className="h-auto whitespace-normal py-2 text-base flex justify-between items-start text-foreground/80 hover:text-foreground"
      render={
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          <span>{children}</span>
          <LucideExternalLink
            className="mt-0.5 size-4 shrink-0 opacity-80"
            data-icon="inline-end"
            aria-hidden="true"
          />
        </a>
      }
    />
  );
}
