class DeleteUser {
    
    private _cc: string;
    
    constructor(
    cc: string,
    ) {
        this._cc= cc;    
    }   

    // Getter
    get cc(): string {
        return this._cc;
    }

    // Setters
    set cc(cc: string) {
        this._cc = cc;
    }    
}

export default DeleteUser;