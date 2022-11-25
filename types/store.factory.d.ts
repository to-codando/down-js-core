export function storeFactory({ state, mutations }: {
    state: any;
    mutations: any;
}): {
    on: (eventName: any, callback: any) => {
        eventName: any;
        handler: any;
    };
    off: (handler: any) => void;
    emit: (eventName: any, payload: any) => void;
    onUpdated: (callback: any) => void;
    prev: () => void;
    next: () => void;
    getState: (index?: number) => any;
    startNavigator: () => void;
};
