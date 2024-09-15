import {check, validationResult} from  'express-validator';
import {Request,Response, NextFunction} from 'express';

let validatorParams =[
    check('cc').isLength({min:7, max:50}),
    check('ficha').isLength({ min: 5, max: 15})
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