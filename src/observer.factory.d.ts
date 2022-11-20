export function observerFactory(value: any): {
    on: (handler: any) => any;
    off: (targetHandler: any) => void;
    set: (payload: any) => void;
    get: () => any;
    view: () => void;
};
