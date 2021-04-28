// subject is the name of channel in NATS
export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:update",
  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",
}
