import express, { Router } from 'express';
import UserController from "../controller/UserController";

export const userRouter: Router = express.Router();

const userController = new UserController();

userRouter.post("/singup", userController.signup);
userRouter.post("/login", userController.login);