import Joi from "joi-oid";

const userSignup = joi.object({
    title: Joi.string()
        .required()
        .min(1)
        .message({
            "any.required":"title is required"
        }),
    cover_photo: Joi.any()
    .required()
    .message({
        "any.required":"phto url is required"
    }),
    description: Joi.string()
    .required()
    .message({
        "any.required":"description is required"
    })
    .min(1),
    category_id: Joi.objectId()
    .messages({
        "any.required": "Category ID is required",
    }),
})

export default userSignup;