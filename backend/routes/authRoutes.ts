import authController from "../controllers/authController";
import { Router } from "express";
import loginLimiter from "../middleware/loginLimiter";

const router: Router = Router();

router.route("/").post(loginLimiter, authController.login);

router.route("/refresh").get(authController.refresh);

router.route("/logout").post(authController.logout);

router.route("/confirmar/:token").get(authController.confirm);

router
  .route("/request-password-reset")
  .post(authController.requestPasswordReset);

router.route("/set-new-password").post(authController.setNewPassword);

export default router;
