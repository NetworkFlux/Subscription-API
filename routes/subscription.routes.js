import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscritptionRouter = Router();

subscritptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscritptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));

subscritptionRouter.post('/', authorize, createSubscription);

subscritptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

subscritptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

subscritptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscritptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));

subscritptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));

export default subscritptionRouter;