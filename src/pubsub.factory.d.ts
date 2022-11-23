export function pubsubFactory(): {
  on: (
    eventName: string,
    handler: (data: any) => void
  ) => {
    eventName: string
    handler: (data: any) => void
  }
  off: ({ eventName, handler }: { eventName: string; handler: (data: any) => void }) => void
  emit: (eventName: any, payload: any) => void
  view: () => {}
}
