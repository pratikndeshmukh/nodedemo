var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(400).send("400 Bad Request");
  });

  app.post("/api/v1/plan/resign/finish", function(req, res) {
    setTimeout(() => {
      res.status(200).send({
        status: "success",
        message: "The order has been successfully submitted"
      });
    }, 3000);
  });

  app.get("/staging/api/carts", function(req, res) {
    let jsonData = require("./carts.json");
    setTimeout(() => {
      res.status(200).send(jsonData);
    }, 3000);
  });

  app.get("/staging/api/newcart", function(req, res) {
    let jsonData = require("./cartsnew.json");
    setTimeout(() => {
      res.status(200).send(jsonData);
    }, 3000);
  });

  app.delete("/staging/api/carts/items", function(req, res) {
    let jsonData = require("./item.json");
    res.status(200).send(jsonData);
  });

  app.get("/staging/api/sessions", function(req, res) {
    // let jsonData = require("./item.json");
    res
      .status(200)
      .send({ session_id: "SS_0b52f5a7-fa01-4848-a499-dc9ddf41e89d" });
  });

  app.post("/staging/api/plans", function(req, res) {
    let jsonData =
      Object.keys(req.body).length === 0 && req.body.constructor === Object
        ? require("./newbbplan.json")
        : require("./newbbplan.json");
    res.status(200).send(jsonData);
  });
};

module.exports = appRouter;
