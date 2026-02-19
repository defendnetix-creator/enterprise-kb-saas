import { Link } from "react-router-dom";

function CategoriesPage() {
  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">

        {/* LOGO */}
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#2513ec] rounded-lg p-2 text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <div>
            <h1 className="text-sm font-bold uppercase">IT Knowledge</h1>
            <p className="text-xs text-slate-500">Admin Console</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 space-y-1">

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Overview</span>
          </Link>

          <Link
            to="/admin/articles"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm">Articles Management</span>
          </Link>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#2513ec]/10 text-[#2513ec] font-semibold">
            <span className="material-symbols-outlined">category</span>
            <span className="text-sm">Categories</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Users</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm">Analytics</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm">System Settings</span>
          </div>

        </nav>

        {/* FOOTER BUTTON */}
        <div className="p-4 border-t border-slate-200">
          <button className="w-full flex items-center justify-center gap-2 bg-[#2513ec] text-white py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Article
          </button>
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-[#2513ec]/20"
                placeholder="Search categories..."
              />
            </div>
          </div>

          <div className="flex items-center gap-6 ml-8">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-slate-500">IT Operations</p>
              </div>
              <img
                className="h-9 w-9 rounded-full border-2 border-slate-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJORfrzQNFzos4QcIe19DuSIkS4YH6FwbwPRFFJTGV05Qc4DeghhhQOX517RWdavSDof0mfaRM1AAc5DczcH9Qy0bThL0vogfGRA7MwkjxEFGvbvOeS7UV6Gk6kGqtrwMMGFaI-6VYYl6fuHLqojL3K070_VKQ5MtLpfR0anTPKYhxaddkAfNJofBfs9VIea-Gl-R7jO7hM19hgr_B0a2SokM4wVfY12F25R1TvJ6ziJram9J_zfhzXEBGShBCQbB3rNdO7ND7MPuh"
                alt="User"
              />
            </div>
          </div>

        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                Categories Management
              </h2>
              <p className="text-sm text-slate-500">
                Organize and maintain the structural taxonomy of the knowledge base.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-[#2513ec] text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-lg">add_box</span>
              Add New Category
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* CATEGORY CARD */}
            {["Servers", "Networking", "Office 365", "Hardware"].map(
              (title, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col"
                >
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm text-slate-500">
                      Sample category description text here...
                    </p>
                    <div className="mt-4 text-xs text-slate-400 uppercase">
                      120 Articles
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between">
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-500 hover:text-[#2513ec]">
                        <span className="material-symbols-outlined">
                          edit
                        </span>
                      </button>
                      <button className="p-2 text-slate-500 hover:text-red-500">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">
                      drag_indicator
                    </span>
                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default CategoriesPage;
