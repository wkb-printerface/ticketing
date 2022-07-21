import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@wkbtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
