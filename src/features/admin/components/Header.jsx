import { useAuth } from "../../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search KB articles, users, or logs..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-indigo-200 text-sm placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-8">

        {/* Notification */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
          <span className="material-symbols-outlined">
            notifications
          </span>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">
              {user?.email}
            </p>
            <p className="text-xs text-slate-500 mt-1 capitalize">
              {user?.role}
            </p>
          </div>

          <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors"
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;
