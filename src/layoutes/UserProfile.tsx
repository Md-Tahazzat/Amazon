import UserProfileSidebar from "../components/UserProfile/Sidebar/UserProfileSidebar";

const UserProfile = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-3/12 min-h-screen bg-slate-50">
        <UserProfileSidebar />
      </aside>
      <div>
        <h1>rest of the page here</h1>
      </div>
    </div>
  );
};

export default UserProfile;
