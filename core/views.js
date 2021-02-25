import { Router } from 'express';

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'HEAD'];

export class View
{
  constructor()
  {
    const router = Router();
    for(const method of HTTP_METHODS)
    {
        const view = method.toLowerCase();
        if(this[view] && router[view])
        {
          const params = ['/', this[view]];
          router[view](...params);
        }
    }
    this.router = router;
  }

  as_router()
  {
    return this.router;
  }
}
