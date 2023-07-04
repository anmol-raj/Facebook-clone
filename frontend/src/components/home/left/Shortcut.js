export default function Shortcut({ img, link, name }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="shortcut_item">
        <img src={img} alt="" />
        <span>{name}</span>
      </a>
    </div>
  );
}
