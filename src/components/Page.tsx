import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div data-testid="page" className="p-20">
      <div
        data-testid="page-content"
        className="flex w-full min-w-0 flex-col gap-6"
      >
        {children}
      </div>
    </div>
  );
}
