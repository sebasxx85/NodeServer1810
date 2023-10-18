import { Router } from "express";
import { getProducts } from "../controllers/products.controllers";


const router = Router();

router.get('/', getProducts )

export default router