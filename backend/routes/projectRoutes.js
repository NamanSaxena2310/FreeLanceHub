const express = require("express");
const { authorizeUser } = require("../middlewares/auth");
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getDetailsOfSingleProject,
  getAllProjectsForUser,
} = require("../controllers/projectController");
const projectRouter = express.Router();

projectRouter.get("/get", authorizeUser, getAllProjects);
projectRouter.post("/create", authorizeUser, createProject);
projectRouter.post("/update", authorizeUser, updateProject);
projectRouter.post("/delete", authorizeUser, deleteProject);
projectRouter.get("/get-single", authorizeUser, getDetailsOfSingleProject);
projectRouter.get("/get-user-projects", authorizeUser, getAllProjectsForUser);

module.exports = {
  projectRouter,
};
