export const checkEnviroment = () => {
  let baseurl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000";

  return baseurl;
};
