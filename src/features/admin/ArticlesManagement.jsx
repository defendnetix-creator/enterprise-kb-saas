import { Link } from "react-router-dom";

function ArticlesManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8] text-slate-900 overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200 px-10 py-3 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <div className="size-8 bg-[#13a4ec] rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">
            KB Admin
          </h2>
        </div>

        <div className="flex items-center gap-8">

          <nav className="flex items-center gap-9">
            <Link
              to="/admin/dashboard"
              className="text-slate-600 text-sm font-medium hover:text-[#13a4ec]"
            >
              Dashboard
            </Link>

            <span className="text-[#13a4ec] text-sm font-bold border-b-2 border-[#13a4ec] py-4 -mb-3">
              Articles
            </span>

            <span className="text-slate-600 text-sm font-medium hover:text-[#13a4ec]">
              Users
            </span>

            <span className="text-slate-600 text-sm font-medium hover:text-[#13a4ec]">
              Settings
            </span>
          </nav>

          <div className="flex gap-2">
            <button className="size-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </button>

            <div className="size-10 rounded-lg bg-slate-100 overflow-hidden">
              <img
                className="size-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZtrUNqcPSKjR774kVNv0BvW-vXbUj0l1QefugEY9vFzGRRyzhFEHoHAThV0kweOtfGs2qPaOZPd1XDIo0RHE1AEbseJ69EUzpUSw283xgtE7ffRy-6Z3O-dyGGWuKB7GnnLzRpVKalAkgl9GRl7R2Wot9yJEOrLf-rqGIH3NW-d2b2LnS77oDCem_ur99N-pmlUaP-BzF_NYUH8vj19WXI4OZ9Z22o933RkILqS44FBv-fZ6oRHfRCjOzclkQLeI-yVshrMeEeK5U"
                alt="Admin"
              />
            </div>
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-6">

          {/* Title Section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                Articles Management
              </h1>
              <p className="text-slate-500 text-sm">
                Review, edit, and organize internal IT knowledge base articles.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-[#13a4ec] text-white px-6 h-11 rounded-lg text-sm font-bold shadow-sm hover:brightness-110">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Article
            </button>
          </div>

          {/* ================= TABLE CARD ================= */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

            {/* Filters */}
            <div className="p-4 flex gap-4 border-b border-slate-200">

              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">
                  search
                </span>
                <input
                  placeholder="Search by title, author, or keyword..."
                  className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#13a4ec]"
                />
              </div>

              <select className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                <option>All Categories</option>
              </select>

              <select className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                <option>All Status</option>
              </select>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">Article Title</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">Category</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">Author</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">Last Updated</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {[
                    {
                      title: "How to Reset O365 Password",
                      id: "KB-2045",
                      category: "O365",
                      catColor: "bg-blue-100 text-blue-800",
                      author: "Jane Doe",
                      date: "Oct 24, 2023",
                      status: "Published",
                      statusColor: "bg-emerald-100 text-emerald-800"
                    },
                    {
                      title: "Server Maintenance Guide v4.2",
                      id: "KB-2042",
                      category: "Server",
                      catColor: "bg-purple-100 text-purple-800",
                      author: "John Smith",
                      date: "Oct 20, 2023",
                      status: "Published",
                      statusColor: "bg-emerald-100 text-emerald-800"
                    },
                    {
                      title: "VPN Connectivity Troubleshooting",
                      id: "KB-2039",
                      category: "Network",
                      catColor: "bg-indigo-100 text-indigo-800",
                      author: "Alice Wong",
                      date: "Oct 18, 2023",
                      status: "Draft",
                      statusColor: "bg-[#13a4ec]/20 text-[#13a4ec]"
                    },
                    {
                      title: "Security Patch Protocol 2023-A",
                      id: "KB-1998",
                      category: "Security",
                      catColor: "bg-rose-100 text-rose-800",
                      author: "Jane Doe",
                      date: "Oct 12, 2023",
                      status: "Published",
                      statusColor: "bg-emerald-100 text-emerald-800"
                    },
                    {
                      title: "Archived: Legacy Printer Setup",
                      id: "KB-0912",
                      category: "Hardware",
                      catColor: "bg-slate-100 text-slate-800",
                      author: "John Smith",
                      date: "Sep 05, 2023",
                      status: "Archived",
                      statusColor: "bg-amber-100 text-amber-800"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold truncate max-w-[280px]">
                            {row.title}
                          </span>
                          <span className="text-xs text-slate-400">
                            ID: {row.id}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${row.catColor}`}>
                          {row.category}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {row.author}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-500">
                        {row.date}
                      </td>

                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">visibility</span>
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">edit</span>
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">delete</span>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <span className="text-sm text-slate-500">
                Showing 1 to 5 of 42 articles
              </span>
              <div className="flex gap-2">
                <button className="size-8 rounded bg-[#13a4ec] text-white text-sm font-bold">1</button>
                <button className="size-8 rounded hover:bg-slate-200 text-sm">2</button>
                <button className="size-8 rounded hover:bg-slate-200 text-sm">3</button>
              </div>
            </div>

          </div>

          {/* ================= STATS SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="size-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">task_alt</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                  Published Articles
                </p>
                <p className="text-2xl font-black">28</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="size-12 rounded-lg bg-blue-100 text-[#13a4ec] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">edit_note</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                  Draft Articles
                </p>
                <p className="text-2xl font-black">12</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="size-12 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">archive</span>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                  Archived Content
                </p>
                <p className="text-2xl font-black">2</p>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-3 px-10 flex justify-between text-sm text-slate-500">
        <span>© 2026 Enterprise IT Knowledge Base</span>
        <div className="flex gap-6">
          <span className="hover:text-[#13a4ec] cursor-pointer">Privacy</span>
          <span className="hover:text-[#13a4ec] cursor-pointer">Terms</span>
          <span className="hover:text-[#13a4ec] cursor-pointer">Support</span>
        </div>
      </footer>

    </div>
  );
}

export default ArticlesManagement;
