export default class DomUtils {
  public static GetOffset(ev: MouseEvent): Pos2d {
    // suppose the offsetParent is html, in order to use clientX, clientY, offsetTop, offsetLeft
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    const el = ev.target as HTMLHtmlElement;
    return {
      x: ev.clientX - el.offsetLeft,
      y: ev.clientY - el.offsetTop
    }
  }
}

