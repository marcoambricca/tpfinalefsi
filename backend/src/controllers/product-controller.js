import { Router } from 'express';
import CommonService from '../services/common-service.js';

const router = Router();
const svcC = new CommonService();

router.get('', async (req, res) => {
  let response;
  const returnObject = await svcC.getAllSync('Products');
  if (response){
    response = res.status(200).json(returnObject)
  }
  else{
    response = res.status(404).send('Error interno');
  }
  return response;
});

export default router;