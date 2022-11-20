export function errorFactory(): {
    get: (key: any) => any;
    emit: (message: any, paramName: any) => never;
};
