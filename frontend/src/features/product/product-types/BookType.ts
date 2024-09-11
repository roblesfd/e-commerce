import { Product } from "./ProductType";

class Book extends Product {
  public name: string;
  public price: number;
  public isOnStock: boolean;
  public noStock: number;
  public pages: number;

  constructor(
    name: string,
    price: number,
    isOnStock: boolean,
    noStock: number,
    pages: number
  ) {
    super();
    this.name = name;
    this.price = price;
    this.isOnStock = isOnStock;
    this.noStock = noStock;
    this.pages = pages;
  }

  showInfo(): string {
    return `Resúmen de producto:
              -Nombre: ${this.name}
              -Precio: ${this.price}
          `;
  }
}

export { Book };

/*
1. Por Género/Temática

    Ficción:
        Literatura y Ficción General
        Ciencia Ficción y Fantasía
        Novelas Gráficas y Comics
        Ficción Histórica
        Misterio, Thriller y Suspense
        Romance
        Terror
        Aventura
    No Ficción:
        Biografías y Memorias
        Historia
        Ciencias Políticas y Sociales
        Ciencias y Matemáticas
        Psicología
        Filosofía
        Economía y Finanzas
        Autoayuda
        Salud, Fitness y Nutrición
        Cocina y Gastronomía
    Ensayo y Crítica Literaria
    Poesía y Teatro

2. Por Público/Edad

    Infantil y Juvenil:
        Libros de imágenes (Picture Books)
        Libros para primeros lectores
        Ficción para adolescentes (Young Adult)
        Libros educativos para niños
    Libros para jóvenes adultos
    Libros para adultos mayores

3. Por Formato

    Libros de tapa dura
    Libros de tapa blanda
    Libros electrónicos (Kindle)
    Libros en audio (Audible)
    Box Sets o Ediciones Especiales
    Libros Pop-Up o interactivos (enfocados a niños)

4. Por Idioma

    Libros en Español
    Libros en Inglés
    Libros en Francés
    Multilingües

5. Por Tipo de Contenido

    Libros de Texto:
        Universitarios
        Académicos
        Escolares
    Guías de Estudio y Preparación de Exámenes:
        Exámenes de ingreso (SAT, GRE, GMAT, etc.)
        Certificaciones profesionales
    Manuales y Guías de Referencia:
        Manuales técnicos (por ejemplo, en programación, diseño, etc.)
        Guías de viaje
        Guías de arte y fotografía
    Cómics, Manga y Novelas Gráficas
        Manga japonés
        Cómics de superhéroes
        Cómics independientes

6. Por Intereses o Hobbies

    Arte y Fotografía
    Viajes
    Cine y Televisión
    Música y Danza
    Jardinería y Horticultura
    Deportes y Aire Libre
    Animales y Mascotas
    Hogar y Jardín

7. Por Colección o Autor Destacado

    Clásicos de la literatura mundial.
    Premiados (Premio Nobel, Pulitzer, etc.)
    Autopublicados (libros por autores independientes).

8. Por Series o Sagas

    Trilogías o colecciones completas de sagas populares, como Harry Potter o El Señor de los Anillos.
*/
