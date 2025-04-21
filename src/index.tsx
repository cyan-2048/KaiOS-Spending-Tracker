import localforage from "localforage";

/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.scss";
import App from "./App";

render(() => <App />, document.body);

Object.assign(window, { localforage });

import "./dev";
