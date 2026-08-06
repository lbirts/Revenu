import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  ChartIcon,
  CollapseIcon,
  DiagramIcon,
  DocumentIcon,
  GearIcon,
} from "../icons";

const items = [
  { to: "/", label: "Overview", Icon: ChartIcon },
  { to: "/revenue-trend", label: "Revenue Trend", Icon: DiagramIcon },
  { to: "/reports", label: "Reports", Icon: DocumentIcon },
  { to: "/settings", label: "Settings", Icon: GearIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative z-10 flex shrink-0 flex-col bg-panel transition-[width] duration-300 ease-(--ease-app) ${
        collapsed ? "w-22" : "w-70"
      }`}
    >
      <div
        className={`mt-6 flex h-12 items-center px-6 ${collapsed ? "justify-center" : "justify-between"}`}
      >
        {!collapsed && (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white">
            <img
              src={logo}
              alt="Revenu logo"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center text-muted transition-colors duration-300 ease-(--ease-app) hover:text-ink"
        >
          <CollapseIcon
            className={`transition-transform duration-300 ease-(--ease-app) ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <nav className="mt-11 flex flex-col gap-6">
        {items.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex items-center gap-2 overflow-hidden whitespace-nowrap px-8 transition-colors duration-300 ease-(--ease-app)",
                isActive
                  ? "h-12.75 border-b border-accent text-accent drop-shadow-[0_4px_25px_rgba(44,197,131,0.8)]"
                  : "h-12.5 text-muted hover:text-ink",
              ].join(" ")
            }
          >
            <Icon className="shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium leading-none">{label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
