export function observerFactory(value: any): {
  on: (handler: (data: any) => void) => (data: any) => void
  off: (targetHandler: (data: any) => void) => void
  set: (payload: any) => void
  get: () => any
  view: () => void
}
