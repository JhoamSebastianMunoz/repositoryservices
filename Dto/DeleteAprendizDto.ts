class DeleteAprendiz {
    
    private _cc: string;
    private _ficha: string;
    private _primer_nombre: string

    constructor(
        cc: string,
        ficha: string,
        primer_nombre:string
    ) {

        this._cc= cc;
        this._ficha = ficha;
        this._primer_nombre = primer_nombre;
    }
    

    // Getters

    get cc(): string {
        return this._cc;
    }

    get ficha(): string {
        return this._ficha;
    }

    get primer_nombre():string{
        return this._primer_nombre;
    }

    // Setters

    set cc(cc: string) {
        this._cc = cc;
    }

    set ficha(ficha: string) {
        this._ficha = ficha;
    }

    set primer_nombre(primer_nombre:string){
        this._primer_nombre = primer_nombre;
    }
    
}

export default DeleteAprendiz ;