import UserMenu from "../header/userMenu";

export default function CreatePost({ user }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.picture} width={"150px"} alt="" />
        <div className="open_post">What's on your mind, {user?.first_name}</div>
      </div>
      <div className="create_splitter"></div>
    </div>
  );
}
