export function eventsFactory({ state, props, methods }: {
    state: any;
    props: any;
    methods: any;
}): {
    add: (decorators: any) => void;
    get: () => {};
    init: (dom: any) => void;
};
