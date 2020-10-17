# Airbrake Error Notification Deno

Create Airbrake error notifications from Deno.

A client implementation of
[Airbrake's error notification v3 API](https://airbrake.io/docs/api/#error-notification-v3).

See the test for an example of usage.

Unlike many other Airbrake libraries, it doesn't integrate into your
application. Instead it needs to be invoked manually. It could be used to build
a library that automatically sends notices on error.

This project is dual licensed under MIT and Apache2, but contains a lot of
examples and documentation from
[Airbrake's API documentation](<(https://airbrake.io/docs/api/#error-notification-v3)>).
