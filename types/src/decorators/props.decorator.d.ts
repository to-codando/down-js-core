export function propsDecorator(decorations?: {}): {
    on: (handler: any) => any;
    off: (targetHandler: any) => void;
    set: (payload: any) => void;
    get: () => any;
    view: () => void;
};
