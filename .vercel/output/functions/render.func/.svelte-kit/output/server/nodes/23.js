

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/examples/payment-request/thanks/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/23.ca4e3d76.js","_app/immutable/chunks/index.ba8c4f3a.js"];
export const stylesheets = [];
export const fonts = [];