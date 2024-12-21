declare module "global/window" {
    const window: Window & typeof globalThis;
    export default window;
}
  