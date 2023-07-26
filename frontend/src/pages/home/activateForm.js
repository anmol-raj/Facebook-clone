import DotLoader from "react-spinners/DotLoader";

export default function ActivateForm({ type, header, text, loading }) {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header" ${
            type === "success" ? "success_text" : "error_text"
          }`}
        >
          Account verification succeeded
        </div>
        <div className="popup_message">Account verification succeeded</div>
        <DotLoader color="#1876f2" loading={loading} size={30} />
      </div>
    </div>
  );
}
