/*
Categorias principales de productos
    Electrónica
    Hogar y Cocina
    Moda (Ropa, Zapatos, Joyería)
    Libros
    Juguetes y Juegos
    Salud y Cuidado Personal
    Alimentos y Bebidas
*/
class Product {
  public name: string;
  public price: number;
  public isOnStock: boolean;
  public noStock: number;

  constructor(
    name: string,
    price: number,
    isOnStock: boolean,
    noStock: number
  ) {
    this.name = name;
    this.price = price;
    this.isOnStock = isOnStock;
    this.noStock = noStock;
  }

  public showInfo(): void {}
}

abstract class Creator {
  abstract factoryCreateProduct(
    name: string,
    price: number,
    isOnStock: boolean,
    noStock: number,
    ...args: any[]
  ): Product;
}

export { Product, Creator };
