import {check, validationResult} from  'express-validator';
import {Request,Response, NextFunction} from 'express';

let validatorParams =[
    check('email').isLength({min:7, max:50}).isEmail(),
    check('contraseña').isLength({ min: 3, max: 100})
];

function validator(req:Request,res:Response,next:NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
}

export default {
    validatorParams,
    validator
}