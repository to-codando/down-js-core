export function pubsubFactory(): {
    on: (eventName: any, handler: any) => {
        eventName: any;
        handler: any;
    };
    off: ({ eventName, handler }: {
        eventName: any;
        handler: any;
    }) => void;
    emit: (eventName: any, payload: any) => void;
    view: () => {};
};
