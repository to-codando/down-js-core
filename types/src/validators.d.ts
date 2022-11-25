export function isFunction(value: any): boolean;
export function isString(value: any): boolean;
export function isObject(value: any): any;
export function isHTMLElement(value: any): boolean;
export function validatorFactory(errorFactory: any): {
    typeValidate: (value: any, type: any) => void;
    validateHooks: (hooks: any) => void;
    validateMethods: (methods: any) => void;
    validateElement: (element: any, tagName: any) => void;
};
