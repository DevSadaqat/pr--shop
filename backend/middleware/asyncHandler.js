//DEV  NOTE: If promise resloved, call next part of middleware, otherwise it will get caught in catch
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
