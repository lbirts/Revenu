import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import DatePickerModal from "./components/DatePickerModal";
import HomeSkeleton, {
  BoneTheme,
  SidebarSkeleton,
} from "./components/HomeSkeleton";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import RevenueTrend from "./pages/RevenueTrend";
import Settings from "./pages/Settings";
import { DEFAULT_TIMELINE } from "./timeline";

let bootedOnce = false;
// `?skeleton` holds the loading state so the shimmer can be inspected
const BOOT_MS = new URLSearchParams(window.location.search).has("skeleton")
  ? 600000
  : 1400;

export default function App() {
  const [booted, setBooted] = useState(bootedOnce);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [timeline, setTimeline] = useState(DEFAULT_TIMELINE);
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (booted) return;
    const t = setTimeout(() => {
      bootedOnce = true;
      setBooted(true);
    }, BOOT_MS);
    return () => clearTimeout(t);
  }, [booted]);

  if (!booted) {
    return (
      <BoneTheme>
        <div className="flex h-screen overflow-hidden">
          <SidebarSkeleton />
          <main className="flex-1 overflow-hidden">
            <HomeSkeleton />
          </main>
        </div>
      </BoneTheme>
    );
  }

  const openPicker = () => setPickerOpen(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <main
        data-testid="main"
        ref={mainRef}
        onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 240)}
        className="relative min-w-0 flex-1 overflow-auto bg-bg"
      >
        {scrolled && (
          <button
            type="button"
            data-testid="scroll-top"
            aria-label="Back to top"
            onClick={() => mainRef.current?.scrollTo({ top: 0 })}
            className="fixed right-10 bottom-10 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-accent-hairline bg-panel text-muted transition-colors duration-300 ease-(--ease-app) hover:text-ink"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        )}
        <Routes>
          <Route
            path="/"
            element={<Home onEditTimeline={openPicker} timeline={timeline} />}
          />
          <Route
            path="/revenue-trend"
            element={
              <RevenueTrend onEditTimeline={openPicker} timeline={timeline} />
            }
          />
          <Route
            path="/reports"
            element={
              <Reports onEditTimeline={openPicker} timeline={timeline} />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <DatePickerModal
        open={pickerOpen}
        value={timeline}
        onSave={setTimeline}
        onClose={() => setPickerOpen(false)}
      />
      <Toaster
        position="bottom-left"
        offset={{ bottom: 62, left: (collapsed ? 88 : 280) + 80 }}
      />
    </div>
  );
}
