class Aprendiz {
    
    private _cc: string;
    private _primer_nombre: string;
    private _segundo_nombre: string;
    private _primer_apellido: string;
    private _segundo_apellido: string;
    private _telefono: string;
    private _ficha: string;
    private _id_instructor: string

    constructor(
        cc: string, primer_nombre: string,
        segundo_nombre: string, primer_apellido: string,
        segundo_apellido: string,telefono: string,
        ficha: string,id_instructor: string
    ) {
        this._cc = cc;
        this._primer_nombre = primer_nombre;
        this._segundo_nombre = segundo_nombre;
        this._primer_apellido = primer_apellido;
        this._segundo_apellido = segundo_apellido;
        this._telefono= telefono;
        this._ficha = ficha;
        this._id_instructor = id_instructor;
    }

    // Getters
    get cc(): string {
        return this._cc;
    }

    get primer_nombre(): string {
        return this._primer_nombre;
    }

    get segundo_nombre(): string {
        return this._segundo_nombre;
    }

    get primer_apellido(): string {
        return this._primer_apellido;
    }

    get segundo_apellido(): string {
        return this._segundo_apellido;
    }
    get telefono(): string {
        return this._telefono;
    }

    get ficha(): string {
        return this._ficha;
    }
    get id_instructor(): string {
        return this._id_instructor;
    }

    // Setters
    set cc(cc: string) {
        this._cc = cc;
    }

    set primer_nombre(primer_nombre: string) {
        this._primer_nombre = primer_nombre;
    }

    set segundo_nombre(segundo_nombre: string) {
        this._segundo_nombre = segundo_nombre;
    }

    set primer_apellido(primer_apellido: string) {
        this._primer_apellido = primer_apellido;
    }

    set segundo_apellido(segundo_apellido: string) {
        this._segundo_apellido = segundo_apellido;
    }
    set telefono(telefono: string) {
        this._telefono = telefono;
    }

    set ficha(ficha: string) {
        this._ficha = ficha;
    }
    set id_instructor(id_instructor: string) {
        this._id_instructor = id_instructor;
    }
}

export default Aprendiz;