import joi from 'joi';

const userSigIn = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: joi.string()
        .required()
        .min(5)
        .max(35)
        .alphanum(),
})

export default userSigIn;