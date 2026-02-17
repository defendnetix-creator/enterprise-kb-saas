function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">auto_stories</span>
                </div>
                <h1 className="text-xl font-bold">IT Knowledge</h1>
              </div>

              <nav className="hidden md:flex gap-6 text-sm">
                <a className="text-slate-600 hover:text-indigo-600">Home</a>
                <a className="text-indigo-600 font-semibold">Categories</a>
                <a className="text-slate-600 hover:text-indigo-600">My Tickets</a>
                <a className="text-slate-600 hover:text-indigo-600">Support</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute left-3 top-2.5 text-slate-400 material-symbols-outlined">
                  search
                </span>
                <input
                  className="w-64 pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none"
                  placeholder="Quick search articles..."
                />
              </div>
              <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

          {/* Breadcrumb */}
          <div className="text-sm text-slate-500 mb-6">
            Home <span className="mx-2">›</span> Browse Categories
          </div>

          {/* Hero */}
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              How can we help you today?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl">
              Select a technical category below to find step-by-step guides,
              troubleshooting tips, and common solutions for standard issues.
            </p>

            <div className="mt-8 max-w-xl relative">
              <span className="absolute left-4 top-4 text-slate-400 material-symbols-outlined">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none"
                placeholder="Filter categories (e.g. Email, VPN, Printer)..."
              />
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {[
              "O365 & Productivity",
              "Networking & Wi-Fi",
              "Server & Infrastructure",
              "Hardware & Peripherals",
              "Printing & Scanning",
              "Security & Access",
              "Mobile Devices",
              "Developer Tools"
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between mb-4">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                    <span className="material-symbols-outlined">dns</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                    42 Articles
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Step-by-step guides and troubleshooting resources.
                </p>
              </div>
            ))}

          </div>

          {/* Support Section */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Still can't find what you're looking for?
              </h4>
              <p className="mt-2 text-slate-600">
                Our support agents are available 24/7 to help you with your technical issues.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                Contact Support
              </button>
              <button className="bg-slate-100 px-6 py-3 rounded-xl font-bold">
                Chat Now
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">
                auto_stories
              </span>
            </div>
            <span className="font-bold">IT Knowledge Base</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2024 Global Enterprise IT. Internal use only.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default UserDashboard;
