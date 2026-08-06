import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="p-20">
      <div className="flex w-full min-w-0 flex-col gap-6">{children}</div>
    </div>
  );
}
