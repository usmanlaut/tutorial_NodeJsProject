const whitelist = [
    "https://www.yoursite.com",
    "http://127.0.0.1:5500",
    "https://3500-cs-762634953526-default.cs-asia-southeast1-yelo.cloudshell.dev",
  ];

  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  };
  

module.exports = corsOptions;  