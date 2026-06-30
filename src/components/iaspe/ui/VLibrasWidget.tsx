// VLibras (Brazilian Sign Language) accessibility widget container.
// ThemeScripts loads vlibras-plugin.js and initializes the Widget, which
// hydrates these custom `vw*` attributes. TS doesn't know them, so we spread.
const attr = (name: string) => ({ [name]: "" }) as Record<string, string>;

export default function VLibrasWidget() {
  return (
    <div {...attr("vw")} className="enabled">
      <div {...attr("vw-access-button")} className="active"></div>
      <div {...attr("vw-plugin-wrapper")}>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
