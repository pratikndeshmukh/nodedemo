var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(400).send("400 Bad Request");
  });

  app.get("/account", function(req, res) {
    var accountMock = {
      username: "nraboy",
      password: "1234",
      twitter: "@nraboy"
    };
    if (!req.query.username) {
      return res.send({ status: "error", message: "missing username" });
    } else if (req.query.username != accountMock.username) {
      return res.send({ status: "error", message: "wrong username" });
    } else {
      return res.send(accountMock);
    }
  });

  //app.get("/api/v1/identity/users/password/otp/qwe123", function(req, res) {
  //res.status(401).send({"timestamp":1510014247997,"status":401,"error":"InvalidAccountPin","exception":"nz.co.vodafone.exceptions.InvalidPinException","message":"Too Many Request","path":null});
  //});

  app.get("/api/v1/identity/users/password/otp", function(req, res) {
    res.status(200).send();
  });

  app.post("/api/v1/identity/users", function(req, res) {
    res.status(200).send({
      timestamp: 1525356499610,
      status: 401,
      error: "Email has already been registered",
      exception: "nz.co.vodafone.identity.user.exception.InvalidPinException",
      message: "Email has already been registered",
      path: null
    });
  });

  //app.get("/api/v1/identity/users/password/otp", function(req, res) {
  //res.status(400).send({"timestamp":1525356499610,"status":400,"error":"InvalidAccountPin","exception":"nz.co.vodafone.identity.user.exception.InvalidPinException","message":"Invalid Pin","path":null});
  //});

  //app.get("/api/v1/identity/users/password/otp", function(req, res) {
  //	res.status(401).send({"timestamp":1510014247997,"status":401,"error":"InvalidAccountPin","exception":"nz.co.vodafone.exceptions.InvalidTokenException","message":"Too Many Request","path":null});
  //});

  //app.get("/api/v1/identity/users/password/otp", function(req, res) {
  //res.status(401).send({"timestamp":1510014247997,"status":401,"error":"InvalidAccountPin","exception":"nz.co.vodafone.exceptions.InvalidTokenException","message":"Invalid account PIN","path":null});
  //});

  //app.get("/api/v1/identity/users/password/otp", function(req, res) {
  //res.status(401).send({"timestamp":1510014247997,"status":401,"error":"InvalidAccountPin","exception":"nz.co.vodafone.exceptions.InvalidTokenException","message":"OTP Expired","path":null});
  //});
  //app.patch("/api/v1/identity/users/password/otp/complete", function(req, res) {
  //	res.status(401).send({"timestamp":1510014247997,"status":401,"error":"InvalidToken","exception":"nz.co.vodafone.exceptions.InvalidTokenException","message":"Invalid Token","path":null});
  //});

  app.patch("/api/v1/identity/users/password/otp/complete", function(req, res) {
    res.status(200).send();
  });

  app.post("/api/v1/identity/users/verify/success", function(req, res) {
    res.status(200).send({
      email: "john@gmails.com",
      linkedMsisdn: "6421548745",
      preIdm: true,
      token: "abcd114"
    });
  });
  /*
app.put("/api/v1/identity/users/*", function(req, res) {
		res.status(200).send();
});

app.patch("/api/v1/identity/users/*", function(req, res) {
		res.status(200).send();
});
*/
  app.options("/api/v1/identity/users/verify/success", function(req, res) {
    //res.status(200).send({"email": "johnsssss@gmail.com","linkedMsisdn":"6421548745", "preIdm": true,"token":"abcd114"});
    res.status(400).send({
      timestamp: 1527145632098,
      status: 400,
      error: "UserUnverified",
      exception: "nz.co.vodafone.exceptions.ErrorResponse",
      message: " Not verified",
      path: null
    });
  });

  //app.get("/api/v1/identity/users/password/otp/", function(req, res) {
  //	res.status(401).send({"status":401,"error":"InvalidAccountPin","message":"Too Many Request","path":null});
  //});

  //app.put("/api/v1/identity/users/otp/resend", function(req, res) {
  //	res.status(401).send({"status":401,"error":"InvalidAccountPin","message":"OTP Expired","path":null});
  //});

  app.put("/api/v1/identity/users/otp/resend", function(req, res) {
    res.status(200).send();
    //	res.status(400).send({"timestamp":1525356526593,"status":400,"error":"Bad Request","exception":"nz.co.vodafone.token.InvalidTokenException","message":"Too many requests in a given period.","path":"/api/v1/tokenizer"});
  });

  app.put("/api/v1/identity/users/password", function(req, res) {
    res.status(200).send({
      email: "",
      linkedMsisdn: "642108987772",
      preIdm: true,
      token: "ss"
    });
  });

  //app.put("/api/v1/identity/users/password", function(req, res) {
  //res.status(400).send({"status":401,"error":"InvalidAccountPin","message":"User account disabled in the system","path":null});
  //});

  //app.put("/api/v1/identity/users/password", function(req, res) {
  //	res.status(400).send({"status":400,"error":"InvalidTokenException","message":"Too many requests in a given period.","path":null});
  //});

  //app.put("/api/v1/identity/users/password", function(req, res) {
  //	res.status(404).send({"status":404,"error":"InvalidAccountPin","message":"Too many requests in a given period.","path":null});
  //});

  app.patch("/api/v1/identity/users/password/reset", function(req, res) {
    res.status(200).send('{"email":"pratik@gmail.com"}');
  });

  app.post("/api/v1/identity/users/email/success", function(req, res) {
    res.status(200).send({ email: "pratikDDDDD@gmail.com" });
  });

  app.patch("/api/v1/identity/users/email/failure", function(req, res) {
    res.status(400).send({
      timestamp: 1506140189638,
      status: 400,
      error: "Invalid",
      exception: "nz.co.vodafone.identity.user.exception.InvalidTokenException",
      message: "Invalid token.",
      path: null
    });
  });

  app.put("/api/v1/identity/users/email/failure/resend", function(req, res) {
    //res.status(200).send({"email":"pratik@gmail.com"});
    res.status(429).send({
      timestamp: 1506140189638,
      status: 429,
      error: "Invalid",
      exception: "nz.co.vodafone.exceptions.TooManyRequestsException",
      message: "Invalid token.",
      path: null
    });
  });

  app.put("/api/v1/identity/users/email/success/resend", function(req, res) {
    res.status(200).send({ email: "pratik@gmail.com" });
    //res.status(429).send({"timestamp":1506140189638,"status":429,"error":"Invalid","exception":"nz.co.vodafone.exceptions.TooManyRequestsException","message":"Invalid token.","path":null});
  });

  app.get("/api/v1/identity/users/password/SuccessToken", function(req, res) {
    res.status(200).send();
  });

  app.get("/api/v1/identity/users/password/Success", function(req, res) {
    res.status(400).send({
      timestamp: 1506140189638,
      status: 400,
      error: "Invalid",
      exception: "nz.co.vodafone.identity.user.exception.InvalidTokenException",
      message: "Invalid token.",
      path: null
    });
  });

  app.get("/api/v1/identity/users/password/error", function(req, res) {
    res
      .status(401)
      .send(
        '{"timestamp":1502847757284,"status":401,"error":"Login","exception":"nz.co.vodafone.exceptions.InvalidTokenException","message":"Username or password incorrect.","path":null}'
      );
  });

  app.patch("/api/v1/identity/users/password/SuccessToken", function(req, res) {
    res.status(200).send({ email: "AAAAA@gmail.com" });
  });

  app.post("/myvodafone/login", function(req, res) {
    res.status(400).send({
      timestamp: 1527145632098,
      status: 400,
      error: "UserUnverified",
      exception: "nz.co.vodafone.exceptions.ErrorResponse",
      message: " Not verified",
      path: null
    });
  });

  app.post("/myvodafone/CaptchaProxy/api/v1/captcha/verify", function(
    req,
    res
  ) {
    res.status(200).send({
      timestamp: 1503551871194,
      status: 401,
      error: "UserUnverified",
      exception: "nz.co.vodafone.exceptions.InvalidCredentialsException",
      message: "UserUnverified",
      path: null
    });
  });

  app.put("/api/v1/identity/users/email", function(req, res) {
    res.status(200).send({
      timestamp: 1510014247997,
      status: 401,
      error: "EmailAlreadyRegistered",
      exception:
        "nz.co.vodafone.identity.user.exception.EmailAreadyRegisteredException",
      message: "Email has already been registered",
      path: null
    });
    //res.status(429).send('{"timestamp":1503551871194,"status":429,"error":"failed","exception":"nz.co.vodafone.exceptions.TooManyRequestsException","message":"Username or password incorrect.","path":null}');
  });

  app.get("/api/v1/plans", function(req, res) {
    let jsonData = require("./plan.json");

    //console.log(jsonData);
    res.status(200).send(jsonData);
    //res.status(400).send({"timestamp":1527145632098,"status":400,"error":"UserUnverified","exception":"nz.co.vodafone.exceptions.ErrorResponse","message":" Not verified","path":null});
  });

  app.post("/api/v1/plan/resign", function(req, res) {
    var accountNo = req.body.accountNo || 123;
    console.info(req.query.accountNo, req.body, accountNo);
    let jsonData = require(`./plan-${accountNo}.json`);
    const status = req.query.status === "success" ? 200 : 500;
    setTimeout(() => {
      res.status(200).send(jsonData);
      // res.status(404).send();
    }, 3000);
  });

  app.post("/api/v1/plan/resign/finish", function(req, res) {
    //res.status(400).send({"timestamp":1527145632098,"status":400,"error":"UserUnverified","exception":"nz.co.vodafone.exceptions.ErrorResponse","message":" Not verified","path":null});
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

  // app.post("/staging/api/plans", function(req, res) {
  //   let jsonData =
  //     Object.keys(req.body).length === 0 && req.body.constructor === Object
  //       ? require("./shop-plans.json")
  //       : require("./shop-plans-post.json");
  //   res.status(200).send(jsonData);
  // });
};

module.exports = appRouter;
