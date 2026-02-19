import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


function UserManagement() {
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

            {/* Title Section */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-black text-slate-900">
                  User Management
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Manage team members, roles, and access permissions (24 total users).
                </p>
              </div>

              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow">
                <span className="material-symbols-outlined text-[18px]">
                  person_add
                </span>
                Invite New User
              </button>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

              {/* Filters */}
              <div className="p-4 flex flex-col md:flex-row gap-4 border-b border-slate-200">

                {/* Search */}
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm outline-none"
                  />
                </div>

                <select className="px-3 py-2 bg-slate-100 rounded-lg text-sm">
                  <option>All Roles</option>
                </select>

                <select className="px-3 py-2 bg-slate-100 rounded-lg text-sm">
                  <option>All Status</option>
                </select>

                <button className="px-3 py-2 bg-slate-100 rounded-lg">
                  <span className="material-symbols-outlined text-slate-600">
                    filter_list
                  </span>
                </button>

              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">

                  <thead className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-4 text-left">Name</th>
                      <th className="px-6 py-4 text-left">Email</th>
                      <th className="px-6 py-4 text-left">Role</th>
                      <th className="px-6 py-4 text-left">Last Login</th>
                      <th className="px-6 py-4 text-left">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-9 h-9 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full font-bold text-sm">
                          JD
                        </div>
                        <span className="font-medium text-slate-900">
                          John Doe
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        john.doe@itkb.com
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                          ADMIN
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2 hours ago
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-green-600 text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                            block
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-sm">
                          JS
                        </div>
                        <span className="font-medium">Jane Smith</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        jane.smith@itkb.com
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          EDITOR
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        5 hours ago
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-green-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            block
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-9 h-9 bg-slate-200 text-slate-600 flex items-center justify-center rounded-full font-bold text-sm">
                          RC
                        </div>
                        <span className="font-medium">Robert Chen</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        robert.c@itkb.com
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-semibold">
                          VIEWER
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        1 day ago
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-slate-400">
                          <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                          Inactive
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <span className="material-symbols-outlined text-slate-400">
                            edit
                          </span>
                          <span className="material-symbols-outlined text-slate-400">
                            block
                          </span>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 bg-slate-50 border-t flex justify-between items-center text-sm">
                <span className="text-slate-500">
                  Showing 1 to 5 of 24 users
                </span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-indigo-600 text-white rounded">
                    1
                  </button>
                  <button className="w-8 h-8 border rounded">
                    2
                  </button>
                  <button className="w-8 h-8 border rounded">
                    3
                  </button>
                </div>
              </div>

            </div>

          </main>

        </div>
      </div>
    </div>
  );
}

export default UserManagement;
