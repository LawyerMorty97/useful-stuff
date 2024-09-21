import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

const log = (context: InvocationContext, ...args: any[]) => {
  const message: string = args[0];
  // Remove the message
  args.splice(0, 1);

  context.log(`[onNewOrder] ${message}`, ...args);
};

export const onNewOrder = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  log(context, `Function called from URL ${request.url}`);

  return {
    status: 200,
    jsonBody: {
      work: "It worked!",
      env: process.env
    }
  };
};

app.http('onNewOrder', {
  route: "onNewOrder",
  methods: ["GET"],
  authLevel: "anonymous",
  handler: onNewOrder
});
