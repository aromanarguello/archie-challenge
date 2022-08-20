import Joi from 'joi';
import { IInvoice } from 'domain/invoice';

export const CreateInvoiceSchema = Joi.object<IInvoice>({
  user_id: Joi.number().positive().required(),
  client_id: Joi.number().positive().required(),
  title: Joi.string().min(2).max(100).required(),
  status: Joi.string().valid('PENDING', 'APPROVED', 'CANCELED').required(),
  total_amount: Joi.number().required(),
});

export const UpdateInvoiceSchema = Joi.object<IInvoice>({
  id: Joi.number().required(),
  user_id: Joi.number().positive().required(),
  client_id: Joi.number().positive().required(),
  title: Joi.string().min(2).max(100).required(),
  status: Joi.string().valid('PENDING', 'APPROVED', 'CANCELED').required(),
  total_amount: Joi.number().required(),
});
