import React, { Children, ReactNode } from "react";
import { filterChildrenByName } from "../utils/dataFormatFunctions";

interface TableContainerProps {
  children: ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

interface TableFooterProps {
  children: ReactNode;
  className?: string;
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableContainer: React.FC<TableContainerProps> = ({
  children,
  className = "",
}) => {
  const childrenArray = Children.toArray(children);

  const tableHead = filterChildrenByName("TableHeader", childrenArray);
  const tableRows = filterChildrenByName("TableRow", childrenArray);
  const tableFooter = filterChildrenByName("TableFooter", childrenArray);

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full table-auto">
        {tableHead.length > 0 && <thead>{tableHead}</thead>}
        <tbody>
          {tableRows.length > 0 &&
            tableRows.map((tableRow, index) => (
              <React.Fragment key={index}>{tableRow}</React.Fragment>
            ))}
        </tbody>
        {tableFooter.length > 0 && <tfoot>{tableFooter}</tfoot>}
      </table>
    </div>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = "",
}) => {
  return <TableRow className={`bg-gray-200 ${className}`}>{children}</TableRow>;
};

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className = "",
}) => {
  return <TableRow className={`bg-gray-200 ${className}`}>{children}</TableRow>;
};

const TableRow: React.FC<TableRowProps> = ({ children, className = "" }) => {
  return (
    <tr className={`border-b ${className}`}>
      {Children.map(children, (child, index) => (
        <TableCell key={index}>{child}</TableCell>
      ))}
    </tr>
  );
};

const TableCell: React.FC<TableCellProps> = ({ children, className = "" }) => {
  return <td className={`px-4 py-2 ${className}`}>{children}</td>;
};

export { TableContainer, TableHeader, TableRow, TableFooter, TableCell };
