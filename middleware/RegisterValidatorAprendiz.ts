import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('cc').isLength({min:4, max:13}),
    check('primer_nombre').isLength({ min: 2, max: 30}),
    check('segundo_nombre').optional(),
    check('primer_apellido').isLength({ min: 2, max: 30}),
    check('segundo_apellido').optional(),
    check('telefono').isLength({ min: 8, max: 15 }).isNumeric(),
    check('ficha').isLength({ min: 5, max: 15}),
    check('id').isLength({ min: 1, max: 100})
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