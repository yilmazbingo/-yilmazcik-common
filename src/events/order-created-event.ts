import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

// t
export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    // in schema this is date object but it will be stringified when we emit an event
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
