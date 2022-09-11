import dynamo from "dynamodb";
import Joi from "joi";

dynamo.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const UserModel = dynamo.define("User5", {
  hashKey: "id",
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  schema: {
    id: dynamo.types.uuid(),
    name: Joi.string(),
    avatar: Joi.string(),
    email: Joi.string(),
    provider: Joi.string(),
    phone: Joi.string(),
    sex: Joi.boolean(),
    date_of_birth: Joi.date(),
  },
});
export { UserModel };
