import { Product } from "./ProductType";

interface Electronica {
  guarantee: boolean;
  model: string;
  brand: string;
  color: string;
  showInfo(): string;
}

class Tablet extends Product implements Electronica {
  public guarantee: boolean;
  public model: string;
  public brand: string;
  public color: string;
  public screenResolution: string;

  constructor(
    name: string,
    price: number,
    isOnStock: boolean,
    noStock: number,
    guarantee: boolean,
    model: string,
    brand: string,
    color: string,
    screenResolution: string
  ) {
    super(name, price, isOnStock, noStock);
    this.guarantee = guarantee;
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.screenResolution = screenResolution;
  }
  public showInfo(): string {
    return `Resúmen de producto Tablet:
                -Nombre: ${this.name}
                -Precio: ${this.price}
                -Garantía: ${this.guarantee ? "Si" : "No"}
                -Modelo: ${this.model}
                -Marca: ${this.brand}
            `;
  }
}

class PhoneCharger extends Product implements Electronica {
  public guarantee: boolean;
  public model: string;
  public brand: string;
  public inputType: string;
  public outputType: string;

  constructor(
    name: string,
    price: number,
    isOnStock: boolean,
    noStock: number,
    guarantee: boolean,
    model: string,
    brand: string,
    inputType: string,
    outputType: string
  ) {
    super(name, price, isOnStock, noStock);
    this.name = name;
    this.price = price;
    this.guarantee = guarantee;
    this.model = model;
    this.brand = brand;
    this.inputType = inputType;
    this.outputType = outputType;
  }

  public showInfo(): string {
    return `Resúmen de producto Tablet:
                -Nombre: ${this.name}
                -Precio: ${this.price}
                -Garantía: ${this.guarantee ? "Si" : "No"}
                -Modelo: ${this.model}
                -Marca: ${this.brand}
            `;
  }
}

export { Tablet, PhoneCharger };
