import {Outlet, Link} from "react-router-dom";

export default function DashboardLayout(){
  return(
    <div className="flex h-screen">

      <div className="w-64 bg-gray-800 text-white px-4">
        <h2 className="text-xl mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link to={overview}>Overview</Link>
          <Link to={profile}>Profile</Link>
          <Link to={settings}>Setting</Link>
        </nav>
      </div>

      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  )
}