import { errorMiddleware } from "@/app/middlewares/errorMiddleware";
import router from "@/app/middlewares/router";
import { getUsers } from "@/app/services/users/getUsers";

export default router.get(getUsers).handler({ onError: errorMiddleware });
