import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">

      {/* LOGO */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-[#2513ec] rounded-lg p-2 text-white flex items-center justify-center">
          <span className="material-symbols-outlined text-xl">
            terminal
          </span>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
            IT Knowledge
          </h1>
          <p className="text-xs text-slate-500">
            Admin Console
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">

        {/* OVERVIEW */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            dashboard
          </span>
          Overview
        </NavLink>

        {/* ARTICLES */}
        <NavLink
          to="/admin/articles"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            description
          </span>
          Articles Management
        </NavLink>

        {/* CATEGORIES */}
        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            category
          </span>
          Categories
        </NavLink>

        {/* USERS */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            group
          </span>
          Users
        </NavLink>

        {/* ANALYTICS */}
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            analytics
          </span>
          Analytics
        </NavLink>

        {/* SETTINGS */}
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              isActive
                ? "bg-[#2513ec]/10 text-[#2513ec] font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`
          }
        >
          <span className="material-symbols-outlined text-[22px]">
            settings
          </span>
          System Settings
        </NavLink>

      </nav>

      {/* BOTTOM BUTTON */}
      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center justify-center gap-2 bg-[#2513ec] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-sm">
            add
          </span>
          Create New Article
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;
