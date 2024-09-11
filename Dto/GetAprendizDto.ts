class GetAprendiz {
    
    private _cc: string;
    private _ficha: string

    constructor(
    cc: string,
        ficha: string
    ) {

        this._cc= cc;
        this._ficha = ficha;
    }
    

    // Getters

    get cc(): string {
        return this._cc;
    }

    get ficha(): string {
        return this._ficha;
    }

    // Setters

    set cc(cc: string) {
        this._cc = cc;
    }

    set ficha(ficha: string) {
        this._ficha = ficha;
    }
    
}

export default GetAprendiz ;