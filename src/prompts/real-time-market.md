# Market

We run a real-time brokerage that sells stocks. Build a UI that can accept a real-time feed of orders and displays the status of orders visually.  
A Market is composed of buy orders and sell orders that are submitted to the broker.

price: number  
quantity: Integer  
symbol: string  
type: SELL / BUY  
status: OPEN, CANCELLED, FULFILLED

When a buy order has a price below a sell order, the quantity of each diminishes until one of the quantities goes to 0, and thus the order is fulfilled.

1.  The UI should allow generating orders of any kind and process the input
2.  The UI can be very simple but must show the best big and best offer (the price to buy and the price to sell) correctly at any point
