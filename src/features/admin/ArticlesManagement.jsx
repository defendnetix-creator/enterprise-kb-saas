function ArticlesManagement() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-900 flex flex-col">

      {/* ================= FIXED HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-slate-200 bg-white px-10 py-3 h-[60px]">

        <div className="flex items-center gap-4">
          <div className="size-8 bg-[#13a4ec] rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em]">
            KB Admin
          </h2>
        </div>

        <div className="flex flex-1 justify-end gap-8">

          <nav className="flex items-center gap-9">
            <span className="text-slate-600 text-sm font-medium cursor-pointer hover:text-[#13a4ec]">
              Dashboard
            </span>

            <span className="text-[#13a4ec] text-sm font-bold border-b-2 border-[#13a4ec] py-4 -mb-3 cursor-pointer">
              Articles
            </span>

            <span className="text-slate-600 text-sm font-medium cursor-pointer hover:text-[#13a4ec]">
              Users
            </span>

            <span className="text-slate-600 text-sm font-medium cursor-pointer hover:text-[#13a4ec]">
              Settings
            </span>
          </nav>

          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
              <span className="material-symbols-outlined">notifications</span>
            </button>

            <div className="flex size-10 items-center justify-center rounded-lg bg-slate-100 overflow-hidden">
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
      <main className="flex-1 flex justify-center pt-[100px] pb-16">
        <div className="flex flex-col w-full max-w-[1200px] px-6 gap-6">

          {/* ================= TITLE ================= */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black tracking-[-0.033em]">
                Articles Management
              </h1>
              <p className="text-slate-500 text-sm">
                Review, edit, and organize internal IT knowledge base articles.
              </p>
            </div>

            <button className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#13a4ec] text-white text-sm font-bold shadow-sm hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Article
            </button>
          </div>

          {/* ================= TABLE CARD ================= */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

            {/* FILTERS */}
            <div className="p-4 flex flex-col md:flex-row items-center gap-4 border-b border-slate-200">
              <input
                className="flex-1 w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm"
                placeholder="Search by title, author, or keyword..."
              />
              <div className="flex gap-3 w-full md:w-auto">
                <select className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                  <option>All Categories</option>
                </select>
                <select className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                  <option>All Status</option>
                </select>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50">
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
                    ["How to Reset O365 Password","KB-2045","O365","Jane Doe","Oct 24, 2023","Published","bg-blue-100 text-blue-800","bg-emerald-100 text-emerald-800"],
                    ["Server Maintenance Guide v4.2","KB-2042","Server","John Smith","Oct 20, 2023","Published","bg-purple-100 text-purple-800","bg-emerald-100 text-emerald-800"],
                    ["VPN Connectivity Troubleshooting","KB-2039","Network","Alice Wong","Oct 18, 2023","Draft","bg-indigo-100 text-indigo-800","bg-[#13a4ec]/20 text-[#13a4ec]"],
                    ["Security Patch Protocol 2023-A","KB-1998","Security","Jane Doe","Oct 12, 2023","Published","bg-rose-100 text-rose-800","bg-emerald-100 text-emerald-800"],
                    ["Archived: Legacy Printer Setup","KB-0912","Hardware","John Smith","Sep 05, 2023","Archived","bg-slate-100 text-slate-800","bg-amber-100 text-amber-800"]
                  ].map((a, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{a[0]}</span>
                          <span className="text-xs text-slate-400">ID: {a[1]}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${a[6]}`}>
                          {a[2]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{a[3]}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{a[4]}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${a[7]}`}>
                          {a[5]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 text-slate-400">
                          <span className="material-symbols-outlined cursor-pointer">visibility</span>
                          <span className="material-symbols-outlined cursor-pointer">edit</span>
                          <span className="material-symbols-outlined cursor-pointer">delete</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
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

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Published Articles","28","task_alt","bg-emerald-100 text-emerald-600"],
              ["Draft Articles","12","edit_note","bg-blue-100 text-[#13a4ec]"],
              ["Archived Content","2","archive","bg-slate-100 text-slate-500"]
            ].map((s,i)=>(
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className={`size-12 rounded-lg flex items-center justify-center ${s[3]}`}>
                  <span className="material-symbols-outlined text-[28px]">{s[2]}</span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{s[0]}</p>
                  <p className="text-2xl font-black">{s[1]}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* ================= SMALL FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-xs text-slate-500">
          <span>© 2026 Enterprise IT Knowledge Base</span>
          <div className="flex gap-6">
            <span className="hover:text-[#13a4ec] cursor-pointer">Privacy</span>
            <span className="hover:text-[#13a4ec] cursor-pointer">Terms</span>
            <span className="hover:text-[#13a4ec] cursor-pointer">Support</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default ArticlesManagement;
