import { Notice, NotificationResponse } from "./notification_types.ts";

export class Notifier {
  readonly url: string;

  constructor(projectId: string, projectKey: string, baseUrl?: string) {
    baseUrl ??= "https://api.airbrake.io/";
    this.url = `${baseUrl}api/v3/projects/${
      encodeURIComponent(projectId)
    }/notices?key=${encodeURIComponent(projectKey)}`;
  }

  notifyRaw(notice: Notice): Promise<Response> {
    return fetch(this.url, {
      body: JSON.stringify(notice),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }

  async notify(notice: Notice): Promise<NotificationResponse> {
    const response = await this.notifyRaw(notice);
    if (response.status === 201) {
      const json = await response.json();
      if (!isNotificationResponse(json)) {
        throw new Error("Unexpected response from Airbrake");
      }
      return json;
    } else {
      throw new Error("Unexpected response from Airbrake");
    }
  }
}

function isNotificationResponse(
  r: NotificationResponse | any,
): r is NotificationResponse {
  return (r instanceof Object) && (typeof r.id === "string") &&
    (typeof r.url === "string");
}
