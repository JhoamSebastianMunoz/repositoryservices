class User {
    
    private _cc: string;
    private _primer_nombre: string;
    private _segundo_nombre: string;
    private _primer_apellido: string;
    private _segundo_apellido: string
    private _email: string;
    private _contraseña: string

    constructor(
        cc: string, primer_nombre: string,
        segundo_nombre: string, primer_apellido: string,
        segundo_apellido: string,email: string,
        contraseña: string
    ) {
        this._cc = cc;
        this._primer_nombre = primer_nombre;
        this._segundo_nombre = segundo_nombre;
        this._primer_apellido = primer_apellido;
        this._segundo_apellido = segundo_apellido;
        this._email= email;
        this._contraseña = contraseña;
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
    get email(): string {
        return this._email;
    }

    get contraseña(): string {
        return this._contraseña;
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
    set email(email: string) {
        this._email = email;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }
    
}

export default User;