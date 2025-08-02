// import ratelimit from "../middleware/";

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    // if we have userId then it is done peruser 
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res.status(420).json({
        message: "Two many request, please try again",
      });
    }
    next();
  } catch (err) {
    console.log("Rate limit error ", err);
    next(err);
  }
};

export default rateLimiter;
