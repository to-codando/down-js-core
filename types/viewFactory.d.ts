export function viewFactory({ events, children, tagName }: {
    events: any;
    children: any;
    tagName: any;
}): {
    add: (key: any, factory: any) => void;
    register: (element: any) => void;
    render: ({ props, state }: {
        props: any;
        state: any;
    }) => void;
    init: (callback: any) => void;
    dom: {};
    componentId: string;
};
