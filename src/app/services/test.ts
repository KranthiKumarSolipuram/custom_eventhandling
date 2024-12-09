export class TestClass{
    public getData(fName: string, lName :string) : any{
         return {firstName : fName , lastName : lName};
    }

    public addition(a : number, b:number): number{
        return a + b;
    }

    public substraction(a : number, b:number): number{
        return a - b;
    }

    public multiplicaion(a : number, b:number): number{
        return a * b;
    }

    public division(a : number, b:number): number{
        return a / b;
    }
}