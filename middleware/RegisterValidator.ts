import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('cc').isLength({min:4, max:13}),
    check('primer_nombre').isLength({ min: 2, max: 30}),
    check('segundo_nombre').optional(),
    check('primer_apellido').isLength({ min: 2, max: 30}),
    check('segundo_apellido').optional(),
    check('email').isLength({ min: 7, max: 50 }).isEmail(),
    check('contraseña').isLength({ min: 3, max: 100})
    ];
        
    
    function validator(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
    
    


    export default {
    validatorParams,
    validator
};