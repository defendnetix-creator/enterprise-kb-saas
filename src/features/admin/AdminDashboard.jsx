import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <Header />

        {/* Main Content (ONLY this scrolls) */}
        <div className="flex-1 overflow-y-auto p-8">

          {/* Page Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              System Overview
            </h2>
            <p className="text-slate-500">
              Monitoring real-time health across Network, Servers, and Office 365 services.
            </p>
          </div>

          {/* ================= STAT CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium">
                  Total Articles
                </span>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <span className="material-symbols-outlined">article</span>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  1,240
                </span>
                <span className="text-green-600 text-sm font-bold flex items-center mb-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  12%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Vs last 30 days
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium">
                  Pending Reviews
                </span>
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <span className="material-symbols-outlined">
                    rate_review
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  14
                </span>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                  High Priority
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Requires immediate attention
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium">
                  Total Views
                </span>
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <span className="material-symbols-outlined">
                    visibility
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  45.2k
                </span>
                <span className="text-green-600 text-sm font-bold flex items-center mb-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  5%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Cumulative user engagement
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-slate-500 text-sm font-medium">
                  System Health
                </span>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <span className="material-symbols-outlined">
                    health_and_safety
                  </span>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  99.9%
                </span>
                <span className="text-emerald-600 text-sm font-bold mb-1">
                  Stable
                </span>
              </div>
            </div>

          </div>

          {/* ================= BOTTOM GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6">

              {/* Chart Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Content Performance
                </h3>

                <div className="h-64 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,180 Q50,160 100,140 T200,80 T300,100 T400,40 T500,60 V200 H0 Z"
                      fill="url(#chartGradient)"
                    />

                    <path
                      d="M0,180 Q50,160 100,140 T200,80 T300,100 T400,40 T500,60"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Service Health */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Service Health Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs font-bold uppercase text-slate-600">Servers</p>
                    <p className="text-xl font-bold mt-1">100%</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs font-bold uppercase text-slate-600">O365 Cloud</p>
                    <p className="text-xl font-bold mt-1">99.8%</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs font-bold uppercase text-slate-600">Network</p>
                    <p className="text-xl font-bold mt-1">100%</p>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            {/* RIGHT SIDE - Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">

  {/* Header */}
  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
    <h3 className="text-lg font-bold text-slate-900">
      Recent Activity
    </h3>
    <button className="text-xs font-semibold text-indigo-600 hover:underline uppercase tracking-tight">
      View All
    </button>
  </div>

  {/* Activity List */}
  <div className="p-6 space-y-6 flex-1">

    {/* Activity 1 */}
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <span className="material-symbols-outlined text-lg">edit</span>
      </div>
      <div>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">John Doe</span> updated{" "}
          <span className="text-indigo-600 font-medium italic">
            'O365 Outlook Sync'
          </span>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          5 minutes ago
        </p>
      </div>
    </div>

    {/* Activity 2 */}
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <span className="material-symbols-outlined text-lg">add_circle</span>
      </div>
      <div>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">Sarah Chen</span> submitted{" "}
          <span className="text-indigo-600 font-medium italic">
            'VPN Tunneling Issues'
          </span>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          12 minutes ago
        </p>
      </div>
    </div>

    {/* Activity 3 */}
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
        <span className="material-symbols-outlined text-lg">delete</span>
      </div>
      <div>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">Admin System</span> archived{" "}
          <span className="text-indigo-600 font-medium italic">
            'Legacy Server 2008 R2'
          </span>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          1 hour ago
        </p>
      </div>
    </div>

    {/* Activity 4 */}
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
        <span className="material-symbols-outlined text-lg">person</span>
      </div>
      <div>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">New User</span> assigned to{" "}
          <span className="text-indigo-600 font-medium italic">
            Network Admin Role
          </span>
        </p>
        <p className="text-xs text-slate-400 mt-1">
          2 hours ago
        </p>
      </div>
    </div>

    {/* Activity 5 */}
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <span className="material-symbols-outlined text-lg">settings</span>
      </div>
      <div>
        <p className="text-sm text-slate-600">
          <span className="font-bold text-slate-900">Security Patch</span> scheduled for Friday night.
        </p>
        <p className="text-xs text-slate-400 mt-1">
          4 hours ago
        </p>
      </div>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="p-4 bg-slate-50 text-center rounded-b-xl">
    <button className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
      See complete audit log
    </button>
  </div>

                </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
