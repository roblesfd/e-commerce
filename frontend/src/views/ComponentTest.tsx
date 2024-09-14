import {
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "../components/Table";
import { tableData } from "../utils/mockData";
import PaymentMethod, {
  OrderBuilder,
  ShippingMethod,
} from "../features/order/OrderBuilder";
import { Book } from "../features/product/product-types/BookType";

const ComponentTest = () => {
  const bookGenerator = (noBooks: number): Book[] => {
    return Array(noBooks)
      .fill({})
      .map((obj) => new Book("Iliada", 150.0, true, 475, 700));
  };

  const product1 = new Book("Iliada", 150.0, true, 475, 700);
  const product2 = new Book("La Odisea", 187.0, true, 510, 800);
  const productList = [product1, product2];

  const orderBuilder = new OrderBuilder();
  const order = orderBuilder
    .addProductList(productList)
    .addProductAmount(productList.length)
    .calculateSubTotal()
    .applyDiscount(10) // 10% de descuento
    .applyTax(5) // 5% de impuestos
    .setShippingMethod(ShippingMethod.Express)
    .setPaymentMethod(PaymentMethod.CreditCard)
    .build();

  console.log(order, order.showSummary());
  return (
    <div>
      <TableContainer className="shadow-lg">
        <TableHeader>
          {tableData.tableHeaderData.map((tableCell) => tableCell)}
        </TableHeader>
        {tableData.tableBodyData.map((tableRow, index) => (
          <TableRow key={index}>{tableRow}</TableRow>
        ))}
        <TableFooter>
          {tableData.tableFooterData.map((tableCell) => tableCell)}
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default ComponentTest;
