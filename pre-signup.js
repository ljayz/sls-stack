export const main = async (event, context, callback) => {
  console.log("pre-signup", event);
  callback(null, event);
};
