import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "çoncert",
      price: 11,
    });
  } catch (err) {
    console.log(err);
  }

  // const data = JSON.stringify({
  //   id: '666',
  //   title: "Order 66",
  //   price: 66
  // })

  // stan.publish('ticket:created', data, () => {
  //   console.log('Event published')
  // })
});
