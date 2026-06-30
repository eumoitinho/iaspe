// Theme preloader; custom.js fades it out once the page is ready.
export default function Preloader() {
  return (
    <div id="preloader">
      <div className="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
