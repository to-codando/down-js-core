export function childrenFactory({ componentFactory, parentState, parentProps, hooks }: {
    componentFactory: any;
    parentState: any;
    parentProps: any;
    hooks: any;
}): {
    add: (selector: any, child: any) => void;
    render: (parentElement: any) => void;
    init: (parentElement: any) => void;
};
