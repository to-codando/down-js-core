export function hooksFactory({ state, props, methods, getDom, element }: {
    state: any;
    props: any;
    methods: any;
    getDom: any;
    element: any;
}): {
    add: (decorators: any) => void;
    emit: (eventName: any, payload: any) => void;
    on: (eventName: any, callback: any) => void;
    watch: () => void;
};
