const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow: boolean) => void
  ) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origen no permitido por CORS"), false);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
