import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-indigo-600 rounded-lg p-2 text-white flex items-center justify-center">
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
            IT Knowledge
          </h1>
          <p className="text-xs text-slate-500">Admin Console</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
          <span className="material-symbols-outlined text-[22px]">
            dashboard
          </span>
          <span className="text-sm">Overview</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[22px]">
            description
          </span>
          <span className="text-sm">Articles Management</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[22px]">
            folder_open
          </span>
          <span className="text-sm">Categories</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[22px]">
            group
          </span>
          <span className="text-sm">Users</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[22px]">
            analytics
          </span>
          <span className="text-sm">Analytics</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[22px]">
            settings
          </span>
          <span className="text-sm">System Settings</span>
        </div>

      </nav>

      {/* Bottom Button */}
      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span>
          Create New Article
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;
