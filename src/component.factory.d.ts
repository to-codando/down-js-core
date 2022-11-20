export function componentFactory(factory: any): {
    children: (selector: any, children: any) => any;
    register: (element: any) => void;
    init: () => void;
    props: {
        set: (payload: any) => void;
        get: () => any;
        on: (eventName: any, callback: any) => any;
        off: (handler: any) => void;
    };
    state: {
        set: (payload: any) => void;
        get: () => any;
        on: (callback: any) => any;
        off: (handler: any) => void;
    };
    eventDrive: {
        emit: (eventName: any, payload: any) => void;
        off: (handler: any) => void;
        on: (eventName: any, callback: any) => {
            eventName: any;
            handler: any;
        };
    };
};
