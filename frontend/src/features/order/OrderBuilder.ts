/*
Elementos de una orden
-Productos 
-Total 
-Impuestos
-Descuentos con cupon o de otra forma
-Servicio extra (amazon prime video)
-Costo e envio 
-Coste de importacion

*/

import { Product } from "../product/ProductType";

export enum ShippingMethod {
  Estandar = "Estándar",
  Express = "Express",
  Internacional = "Internacional",
  Gratuito = "Gratuito",
  PuntoDeRecogida = "Punto de recogida",
}

export enum PaymentMethod {
  CreditCard = "Tarjeta de Crédito/Débito",
  PayPal = "PayPal",
  BankTransfer = "Transferencia Bancaria",
  CashOnDelivery = "Contra Reembolso",
  CashAtConvenienceStore = "Pago en Efectivo en Tienda de Conveniencia",
}

export default PaymentMethod;

class Order {
  public products: Product[] = [];
  public productAmount: number = 0;
  public discountedPrice: number = 0;
  public tax: number = 0;
  public shippingMethod: ShippingMethod = ShippingMethod.Express;
  public paymentMethod: PaymentMethod = PaymentMethod.CreditCard;
  public subTotal: number = 0;
  public finalPrice: number = 0;

  constructor() {}

  public showSummary(): string {
    return `
        Resumen del Pedido:
        - Productos (${this.productAmount}): ${this.products
      .map((p) => p.name)
      .join(", ")}
        - Método de Envío: ${this.shippingMethod}
        - Método de Pago: ${this.paymentMethod}
        - Subtotal: ${this.subTotal} MXN
        - Descuento: ${this.discountedPrice}
        - Impuesto: ${this.tax}%
        - Total: ${this.finalPrice} MXN
      `;
  }
}

class OrderBuilder {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  public addProductList(productList: Product[]): this {
    this.order.products = productList;
    return this;
  }

  public addProductAmount(amount: number): this {
    this.order.productAmount = amount;
    return this;
  }

  public calculateSubTotal(): this {
    this.order.subTotal = this.order.products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    return this;
  }

  public applyDiscount(discount: number): this {
    this.order.discountedPrice =
      this.order.subTotal - (discount / 100) * this.order.subTotal;
    this.order.finalPrice = this.order.discountedPrice;
    return this;
  }

  public applyTax(tax: number): this {
    const taxRate = (tax / 100) * this.order.subTotal;
    this.order.finalPrice = parseFloat(
      (taxRate + this.order.finalPrice).toFixed(2)
    );
    this.order.tax = tax;
    return this;
  }

  public setShippingMethod(method: ShippingMethod): this {
    this.order.shippingMethod = method;
    return this;
  }

  public setPaymentMethod(method: PaymentMethod): this {
    this.order.paymentMethod = method;
    return this;
  }

  // Construir y obtener el pedido final
  public build(): Order {
    return this.order;
  }
}

export { Order, OrderBuilder };
