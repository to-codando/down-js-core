export function domFactory(context: any): {
    on: (eventName: any, selector: any, handler: any) => void;
    queryOnce: (selector: any) => any;
    queryAll: (selector: any) => any[];
    appElement: any;
};
