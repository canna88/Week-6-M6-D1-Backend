const checkUser = (req, res, next) => {
  if (req.headers.authorization === "password") {
    next();
  } else {
    const error = new Error("Access denied");
    error.statuscode = 401;
    console.log(error);
    next(error);
  }
};

export default checkUser;