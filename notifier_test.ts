import { Notice } from "./notification_types.ts";
import { Notifier } from "./notifier.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.74.0/testing/asserts.ts";

const exampleNotice: Notice = {
  "errors": [
    {
      "type": "error1",
      "message": "message1",
      "backtrace": [
        {
          "file": "backtrace file",
          "line": 10,
          "function": "backtrace function",
          "code": {
            "1": "code",
            "2": "more code",
          },
        },
      ],
    },
    {
      "type": "error2",
      "message": "message2",
      "backtrace": [
        {
          "file": "backtrace file",
          "line": 10,
          "function": "backtrace function",
        },
      ],
    },
  ],
  "context": {
    "notifier": {
      "name": "notifier name",
      "version": "notifier version",
      "url": "notifier url",
    },
    "os":
      "Linux 3.5.0-21-generic #32-Ubuntu SMP Tue Dec 11 18:51:59 UTC 2012 x86_64",
    "hostname": "production-rails-server-1",
    "language": "Ruby 2.1.1",
    "environment": "production",
    "severity": "error",
    "version": "1.1.1",
    "url": "http://some-site.com/example",
    "rootDirectory": "/home/app-root-directory",
    "user": {
      "id": "12345",
      "name": "root",
      "email": "root@root.com",
    },
    "route": "/pricing",
    "httpMethod": "POST",
  },
  "environment": {
    "PORT": "443",
    "CODE_NAME": "gorilla",
  },
  "session": {
    "basketId": "123",
    "userId": "456",
  },
  "params": {
    "page": "3",
    "sort": "name",
    "direction": "asc",
  },
};

Deno.test("Notifier sends off request to local Errbit", async () => {
  const notifier = new Notifier(
    "1",
    "fd8dc33455afb0a2fc702b967667a70c",
    "http://localhost:8080/",
  );
  const response = await notifier.notify(exampleNotice);
  assert(response instanceof Object, "Expect response to be an object");
  assertEquals(typeof response.id, "string");
  assertEquals(typeof response.url, "string");
});
