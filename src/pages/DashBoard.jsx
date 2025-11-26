import {
  SquarePen,
  ChartCandlestick,
  Moon,
  Sun,
  Bell,
  Home,
  AlertTriangle,
  Link as LinkIcon,
  Layers,
} from "lucide-react";
import { div } from "framer-motion/client";

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-[#0f0f0f] text-white flex overflow-visible">
      {/* Sidebar */}
      <aside className="w-64 bg-[#141414] border-r border-neutral-800 flex flex-col justify-between p-6">
        <div>
          <h1 className="text-xl font-bold mb-10 flex items-center gap-2">
            <span><img width={20} height={20} src="/logo.png" alt="" /></span> AutoTradeX
          </h1>

          <nav className="space-y-2">
            <SidebarItem icon={<Home size={20} />} label="Home" />
            <SidebarItem icon={<AlertTriangle size={20} />} label="Alerts" />
            <SidebarItem icon={<LinkIcon size={20} />} label="Connections" />
            <SidebarItem icon={<Layers size={20} />} label="Paper Trading" />
          </nav>
        </div>

        <div className="flex items-center gap-3 text-sm text-neutral-300">
          <div className="w-10 h-10 rounded-full bg-neutral-700" />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-xs text-neutral-400">Plus</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Dashboard</h2>
          <div className="flex gap-4 items-center text-neutral-300">
            <Moon size={20} />
            <Bell size={20} />
          </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-[2fr_1fr] bg-[#0f0f10] gap-6 mb-6">
          {/* Connected Accounts */}
          <div className="bg-[#141414] pt-1 px-1 rounded-4xl border border-neutral-800 h-[380px] flex flex-col">
            <div className="bg-[#1A1A1A] h-[340px] rounded-4xl">
              <h3 className="text-xl m-5 font-semibold">
                Connected Demat Accounts
              </h3>
              <div className="">
                <div className="flex w-full items-center h-[200px] items-stretch">
                  <div className="bg-[#2563EB] text-[#141414] font-bold rounded-4xl mx-5 p-5 w-full flex-1 h-full">
                    <AccountCard
                      style={{
                        fontSize: "25px",
                        lineHeight: "1",
                        marginTop: "50px",
                      }}
                      status="expired"
                      name="ZERODHA"
                    />
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#2563EB] text-[#141414] font-bold rounded-4xl mx-5 p-5 w-full flex-1 h-full">
                    <AccountCard
                      style={{
                        fontSize: "25px",
                        lineHeight: "1",
                        marginTop: "50px",
                      }}
                      status="connected"
                      name="Upstox"
                    />
                  </div>
                  {/* More Button Box */}
                  <div className="w-20 h-full bg-[#141414] rounded-l-4xl flex items-center justify-center text-neutral-400 text-sm">
                    <div className="flex flex-col items-center justify-center leading-tight">
                      <span>More</span>
                      <span className="text-3xl">»</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto p-5 flex items-end justify-between text-lg text-neutral-400">
              <p>
                Active Accounts :{" "}
                <span className="text-white font-bold ml-2">1</span>
              </p>
              <p>
                Total Connected :{" "}
                <span className="text-white font-bold ml-2">3</span>
              </p>
            </div>
          </div>

          {/* Daily Trade Limit */}
          <div className="bg-[#141414] min-h-[380px] overflow-visible p-6 rounded-4xl border border-neutral-800 col-span-1 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4">Daily Trade Limit</h3>
            <div className="relative w-[250px] h-[250px] flex items-center justify-center overflow-visible">
              <svg
                className="w-full h-full rotate-[-90deg]"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="13"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  className="text-white"
                />

                <circle
                  cx="18"
                  cy="18"
                  r="13"
                  strokeWidth="4.8"
                  stroke="currentColor"
                  fill="none"
                  strokeDasharray="100"
                  strokeDashoffset="58"
                  strokeLinecap="round"
                  className="text-blue-500"
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-sm text-neutral-400">Trades Executed</p>
                <p className="text-3xl font-bold">15</p>
              </div>
            </div>
            <p className="text-neutral-400 mt-2">
              Trades Remaining :{" "}
              <span className="text-white text-lg font-bold ml-2">35</span>
            </p>
          </div>
        </div>

        {/* Active Alerts */}
        <section className="bg-[#141414] p-6 rounded-xl border border-neutral-800 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Active Alerts</h3>
            <p className="text-neutral-400 text-sm">View all »</p>
          </div>

          {[
            "Nifty Buy Alert",
            "SBIN Buy Alert",
            "HDFC Bank Buy Alert",
            "Nifty Sell Alert",
            "TATASTEEL Sell Alert",
          ].map((x, i) => (
            <AlertRow key={i} name={x} />
          ))}
        </section>

        {/* Recent Activity */}
        <section className="bg-[#141414] p-6 rounded-xl border border-neutral-800">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="text-neutral-500 text-sm">
            (Table UI not fully coded — add your table here)
          </div>
        </section>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-md ${
        active
          ? "bg-neutral-800 text-white"
          : "text-neutral-400 hover:bg-neutral-800"
      }`}
    >
      {icon} {label}
    </div>
  );
}

function AccountCard({ status, name, style }) {
  const isExpired = status === "expired";
  return (
    <div className="relative overflow-hidden ">
      {isExpired ? (
        <span className="text-[#141414] font-medium text-s">
          ● Access Token Expired
        </span>
      ) : (
        <span className="text-[#141414] font-medium text-s">
          <span className="text-green-600 font-bold text-s">● </span>Connected
        </span>
      )}
      <div className="mt-6" style={style}>
        {name}
      </div>
      <button className="mt-2 bg-[#1A1A1A] px-5 py-2 text-white text-sm rounded-4xl">
        {isExpired ? "Reconnect" : "View Details"}
      </button>
    </div>
  );
}

function AlertRow({ name }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-neutral-700" />
        <p>{name}</p>
      </div>
      <div className="flex items-center gap-4 text-neutral-400">
        <ChartCandlestick />
        <SquarePen />
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-15 h-8 bg-neutral-700 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:w-6 after:h-6 after:bg-white after:rounded-full after:left-1 after:top-1 after:transition-all peer-checked:after:translate-x-7"></div>
        </label>
      </div>
    </div>
  );
}
