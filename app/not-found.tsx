import { Metadata } from "next";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exists anymore",
};

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
