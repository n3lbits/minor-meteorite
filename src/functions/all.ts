import { is } from "./api/is";
import greeting from "../data/greatings.json";

export async function onRequest(context: EventContext): PagesFunction {
  // Contents of context object
  const {
      next, // used for middleware or to fetch assets
  } = context;

  const response = await next();

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    let isT = "is " + is[Math.floor(Math.random() * is.length)];

    .on("i#is", {
      element(element) {
          element.setInnerContent(isT);
      },
  })