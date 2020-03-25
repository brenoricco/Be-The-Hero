import express from "express";

//Controllers
import OngController from "./controllers/OngController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const routes = express.Router();

routes.post("/ongs", OngController.create);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profiles", ProfileController.index);

routes.post("/sessions", SessionController.create);

export default routes;
