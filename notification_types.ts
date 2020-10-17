export type BacktraceLine = {
  /** The full path of the file in this entry of the backtrace. */
  file?: string;
  /** When available, the function or method name in this entry of the backtrace. */
  function?: string;
  /** The file’s line number in this entry of the backtrace. */
  line?: number;
  /** The line’s column number in this entry of the backtrace. */
  column?: number;
  /** Current line of code plus a few lines around. */
  code?: {
    [line: number]: string;
  };
};

export type Error = {
  /** The class name or type of error that occurred. */
  type?: string;
  /** A short message describing the error that occurred. */
  message?: string;
  /** An array of objects describing each line of the error’s backtrace. */
  backtrace?: BacktraceLine[];
};

export type Notifier = {
  /** The name of the notifier client submitting the request, e.g. “airbrake-js”. */
  name?: string;
  /** The version number of the notifier client submitting the request, e.g. “1.2.3”. */
  version?: string;
  /** A URL at which more information can be obtained concerning the notifier client. */
  url?: string;
};

export type User = {
  /** If applicable, the current user’s ID. */
  id?: string;
  username?: string;
  /** If applicable, the current user’s username. */
  name?: string;
  /** If applicable, the current user’s email address. */
  email?: string;
};

export type Context = {
  /** The name of the server environment in which the error occurred, e.g. “staging”, “production”, etc. */
  environment?: string;
  /** The component or module in which the error occurred. In MVC frameworks like Rails, this should be set to the controller. Otherwise, this can be set to a route or other request category. */
  component?: string;
  /** The action in which the error occurred. If each request is routed to a controller action, this should be set here. Otherwise, this can be set to a method or other request subcategory. */
  action?: string;
  /** Details of the operating system on which the error occurred. */
  os?: string;
  /** Describe the language on which the error occurred, e.g. “Ruby 2.1.1”. */
  language?: string;
  /** How severe the error that occurred */
  severity?:
    | "debug"
    | "info"
    | "notice"
    | "warning"
    | "error"
    | "critical"
    | "alert"
    | "emergency"
    | "invalid";
  /** Describe the application version, e.g. “v1.2.3”. */
  version?: string;
  /** The application’s URL. */
  url?: string;
  /** The requesting browser’s full user-agent string. */
  userAgent?: string;
  /** The IP address of the user that triggered the notice. */
  userAddr?: string;
  /** The IP address of the server that reported the notice. */
  remoteAddr?: string;
  /** The application’s root directory path. */
  rootDirectory?: string;
  /** The hostname of the server on which the error occurred. */
  hostname?: string;
  /** An object describing the notifier client library. */
  notifier?: Notifier;
  user?: User;
  /** Application route that triggered this error. */
  route?: string;
  /** HTTP method that was used to call “context/route” */
  httpMethod?: string;
};

export type Environment = {
  [key: string]: string;
};
export type Session = {
  [key: string]: string;
};
export type Params = {
  [key: string]: string;
};

export type Notice = {
  /** An array of objects describing the error that occurred. */
  errors: Error[];
  /** An object describing additional context for this error. */
  context?: Context;
  /** An object containing the current environment variables. Where the key is the variable name, e.g. `{ "PORT": "443", "CODE_NAME": "gorilla" }`. */
  environment?: Environment;
  /** An object containing the current session variables. Where the key is the variable name, e.g. `{ "basket_total": "1234", "user_id": "123" }`. */
  session?: Session;
  /** An object containing the request parameters. Where the key is the parameter name, e.g. `{ "page": "3", "sort": "desc" }`. */
  params?: Params;
};

export type NotificationResponse = {
  /** The UUID of the newly created error notice. This can be used to [query the status of this error notice](https://airbrake.io/docs/api/#show-notice-status-v4). */
  id: string;
  /** A URL that will take you to the error on the Airbrake dashboard. */
  url: string;
};
