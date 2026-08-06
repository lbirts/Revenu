import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "./components/Sidebar";
import DatePickerModal from "./components/DatePickerModal";
import HomeSkeleton, {
  BoneTheme,
  SidebarSkeleton,
} from "./components/HomeSkeleton";
import Home from "./pages/Home";
import RevenueTrend from "./pages/RevenueTrend";
import Reports from "./pages/Reports";
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
      <Sidebar />
      <main
        data-testid="main"
        className="relative min-w-0 flex-1 overflow-auto bg-bg"
      >
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
            element={<Reports onEditTimeline={openPicker} timeline={timeline} />}
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
      {/* toast anchor: 80px into the content area, 62px from the bottom (design) */}
      <Toaster position="bottom-left" offset={{ bottom: 62, left: 360 }} />
    </div>
  );
}
