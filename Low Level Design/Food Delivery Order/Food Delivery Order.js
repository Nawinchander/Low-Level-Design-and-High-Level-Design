class Order {
  constructor(id, items) {
    this.id = id;
    this.items = items;
    this.status = "PLACED";
  }

  updateStatus(status) {
    this.status = status;
  }
}

class PaymentProcessor {
  process(order) {
    return `Payment processed for order ${order.id}`;
  }
}

class DeliveryAgent {
  assign(order) {
    return `Agent assigned for order ${order.id}`;
  }
}

class OrderService {
  constructor() {
    this.paymentProcessor = new PaymentProcessor();
    this.deliveryAgent = new DeliveryAgent();
  }

  placeOrder(order) {
    this.paymentProcessor.process(order);
    this.deliveryAgent.assign(order);
    order.updateStatus("CONFIRMED");
    return order;
  }
}

