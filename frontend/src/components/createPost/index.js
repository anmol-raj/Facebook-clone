import "./style.css";
import UserMenu from "../header/userMenu";
import { Feeling, LiveVideo, Photo } from "../../svg";

export default function CreatePost({ user }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.picture} width={"150px"} alt="" />
        <div className="open_post">What's on your mind, {user?.first_name}</div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover2">
          <LiveVideo color={"#f3425f"} />
          Live Video
        </div>
        <div className="createPost_icon hover2">
          <Photo color={"#4bbf67"} />
          Live Video
        </div>
        <div className="createPost_icon hover2">
          <Feeling color={"#f7b928"} />
          Live Video
        </div>
      </div>
    </div>
  );
}
