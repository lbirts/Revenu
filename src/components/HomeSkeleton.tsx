import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/* Gray mini-bar geometry */
const skeletonBars = [
  { x: 65, top: 139, h: 43 },
  { x: 143, top: 121, h: 60 },
  { x: 221, top: 122, h: 60 },
  { x: 299, top: 104, h: 78 },
  { x: 377, top: 91, h: 90 },
  { x: 455, top: 79, h: 102 },
];

export function BoneTheme({ children }: { children: React.ReactNode }) {
  return (
    <SkeletonTheme
      baseColor="#444645"
      highlightColor="rgba(255,255,255,0.07)"
      borderRadius={8}
      duration={1.4}
    >
      {children}
    </SkeletonTheme>
  );
}

export default function HomeSkeleton() {
  return (
    <div className="flex grow flex-col gap-6 bg-panel-2 p-20">
      {/* header bones */}
      <div className="flex h-15 flex-col gap-3">
        <Skeleton width={370} height={23} />
        <Skeleton width={177} height={15} />
      </div>

      {/* stat card bones */}
      <div className="flex w-full gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="flex h-35.75 grow basis-0 flex-col gap-3 rounded-lg bg-panel p-6"
          >
            <Skeleton width={190} height={21} />
            <Skeleton width={190} height={60} />
          </div>
        ))}
      </div>

      {/* trend card bone */}
      <div className="h-80 w-full rounded-lg bg-panel p-6">
        <Skeleton width={295} height={36} />
      </div>

      {/* bottom row bones */}
      <div className="flex w-full gap-4">
        <div className="h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel px-5.5 py-6">
          <Skeleton width={142} height={36} />
          <div className="mt-4 flex items-center gap-7.5">
            <Skeleton circle width={142} height={142} />
            <div className="flex grow flex-col gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <Skeleton key={i} height={18} containerClassName="w-full" />
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel">
          <div className="absolute left-6 top-6">
            <Skeleton width={250} height={36} />
          </div>
          <svg viewBox="0 0 492 242" className="absolute inset-0 h-full w-full">
            <line
              x1="65"
              x2="455"
              y1="181"
              y2="181"
              stroke="rgba(134,134,140,0.08)"
            />
            {skeletonBars.map((b) => (
              <rect
                key={b.x}
                x={b.x - 2}
                y={b.top}
                width="4"
                height={b.h}
                rx="2"
                fill="#444645"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="flex w-70 shrink-0 flex-col bg-panel-2">
      <div className="mt-6 flex h-12 items-center px-6">
        <Skeleton circle width={48} height={48} />
      </div>
      <div className="mt-11 flex flex-col gap-10 px-6">
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} width={232} height={17} />
        ))}
      </div>
    </div>
  );
}
