import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function ArticlesManagement() {
  return (
    <div className="flex h-screen bg-[#f6f7f8] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">

          <main className="px-10 py-8">

            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-3xl font-black text-slate-900">
                Articles Management
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Review, edit, and organize internal IT knowledge base articles.
              </p>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

              {/* Filters */}
              <div className="p-4 flex flex-col md:flex-row gap-4 border-b border-slate-200">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search by title, author, or keyword..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 text-sm outline-none"
                  />
                </div>

                <select className="px-3 py-2 rounded-lg bg-slate-100 text-sm">
                  <option>All Categories</option>
                </select>

                <select className="px-3 py-2 rounded-lg bg-slate-100 text-sm">
                  <option>All Status</option>
                </select>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">

                  <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-4 text-left">Article Title</th>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-left">Author</th>
                      <th className="px-6 py-4 text-left">Last Updated</th>
                      <th className="px-6 py-4 text-left">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            How to Reset O365 Password
                          </p>
                          <p className="text-xs text-slate-400">
                            ID: KB-2045
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          O365
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        Jane Doe
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Oct 24, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                            visibility
                          </span>
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                            delete
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-semibold">
                          Server Maintenance Guide v4.2
                        </p>
                        <p className="text-xs text-slate-400">
                          ID: KB-2042
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          Server
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        John Smith
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Oct 20, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-slate-400">
                            visibility
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            delete
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-semibold">
                          VPN Connectivity Troubleshooting
                        </p>
                        <p className="text-xs text-slate-400">
                          ID: KB-2039
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                          Network
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        Alice Wong
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Oct 18, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          Draft
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-slate-400">
                            visibility
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            delete
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-semibold">
                          Security Patch Protocol 2023-A
                        </p>
                        <p className="text-xs text-slate-400">
                          ID: KB-1998
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs">
                          Security
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        Jane Doe
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Oct 12, 2023
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                          Published
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <span className="material-symbols-outlined text-slate-400">
                            visibility
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            delete
                          </span>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t bg-slate-50 flex justify-between items-center text-sm">
                <span className="text-slate-500">
                  Showing 1 to 5 of 42 articles
                </span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded">
                    1
                  </button>
                  <button className="w-8 h-8 border rounded">
                    2
                  </button>
                </div>
              </div>

            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border">
                <p className="text-xs uppercase text-slate-400">
                  Published Articles
                </p>
                <p className="text-2xl font-bold mt-2">28</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <p className="text-xs uppercase text-slate-400">
                  Draft Articles
                </p>
                <p className="text-2xl font-bold mt-2">12</p>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <p className="text-xs uppercase text-slate-400">
                  Archived Content
                </p>
                <p className="text-2xl font-bold mt-2">2</p>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}

export default ArticlesManagement;
