interface Module {
    moduleId: number;
    moduleName: string;
    moduleDescription: string;
    pages: {
        [x: string]: any;
        pageId: number;
        pageName: string;
        pageDescription:string;
        actions:{
            [x: string]: any;
            actionId:number;
            actionName:string;
            actionDescription:string;
        }
    }
}