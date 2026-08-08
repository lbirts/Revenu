import { useState } from "react";
import { toast } from "sonner";
import GlowButton from "../components/GlowButton";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import { SelectField, TextField } from "../components/TextField";
import Toggle from "../components/Toggle";
import { defaultNotifications, timezones } from "../data";

const showSavedToast = () =>
  toast.custom(
    () => (
      <div
        data-testid="saved-toast"
        className="flex h-16.75 w-110.5 items-center justify-center rounded-lg bg-toast text-base font-semibold text-ink"
      >
        Your changes have been successfully saved
      </div>
    ),
    { duration: 3000 },
  );

type Form = {
  name: string;
  position: string;
  company: string;
  tz: string;
  notifs: boolean[];
};

const initial: Form = {
  name: "",
  position: "CFO",
  company: "Silleon",
  tz: timezones[0],
  notifs: defaultNotifications.map((n) => n.on),
};

export default function Settings() {
  const [form, setForm] = useState<Form>(initial);
  const [saved, setSaved] = useState<Form>(initial);

  const dirty = JSON.stringify(form) !== JSON.stringify(saved);

  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  /* Notification switches apply on toggle, so they never make the form dirty. */
  const setNotif = (i: number, v: boolean) => {
    const notifs = form.notifs.map((x, j) => (j === i ? v : x));
    setForm((f) => ({ ...f, notifs }));
    setSaved((s) => ({ ...s, notifs }));
  };

  const save = () => {
    setSaved(form);
    showSavedToast();
  };

  return (
    <Page>
      <PageHeader
        title="Settings"
        subtitle="Manage your personal information and preferences"
      />

      <div
        data-testid="profile-card"
        className="flex flex-col rounded-lg bg-panel px-5.5 py-6"
      >
        <h3
          data-testid="profile-card-title"
          className="text-2xl font-semibold leading-7 text-ink"
        >
          Profile
        </h3>
        <div data-testid="profile-fields" className="mt-6 flex flex-col gap-6">
          <div className="flex gap-6">
            <TextField
              label="Name"
              value={form.name}
              placeholder="Mike Ross"
              onChange={(v) => set("name", v)}
            />
            <TextField
              label="Position"
              value={form.position}
              onChange={(v) => set("position", v)}
            />
          </div>
          <div className="flex gap-6">
            <TextField
              label="Company"
              value={form.company}
              onChange={(v) => set("company", v)}
            />
            <SelectField
              label="Time zone"
              value={form.tz}
              options={timezones}
              onChange={(v) => set("tz", v)}
            />
          </div>
        </div>

        <GlowButton
          testId="save-changes-btn"
          disabled={!dirty}
          onClick={save}
          className="mt-6 self-start"
        >
          Save changes
        </GlowButton>
      </div>

      <div
        data-testid="notifications-card"
        className="rounded-lg bg-panel px-5.5 py-6"
      >
        <h3
          data-testid="notifications-card-title"
          className="text-2xl font-semibold leading-7 text-ink"
        >
          Notifications
        </h3>
        <div data-testid="notification-rows" className="mt-6 flex flex-col">
          {defaultNotifications.map((n, i) => (
            <div
              key={n.key}
              data-testid={`notification-row-${n.key}`}
              className={`flex h-13.5 items-center justify-between border-l-2 border-l-transparent pl-3 has-data-checked:border-l-accent ${
                i < defaultNotifications.length - 1
                  ? "border-b border-b-input-border"
                  : ""
              }`}
            >
              <span className="text-base leading-none text-ink">{n.label}</span>
              <Toggle
                testId={`notification-toggle-${n.key}`}
                on={form.notifs[i]}
                onChange={(v) => setNotif(i, v)}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
