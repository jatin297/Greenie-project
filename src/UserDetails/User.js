import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import dummy_Data from "./MOCK_DATA.json";
import COLUMNS from "../UserDetails/Columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import Dialog from "./Dialog";
import "./Dialog.css";

export const User = () => {
  // Doing below memo so that data should not re-render.
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dummy_Data, []);

  const [dialogData, setDialogData] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [rowData, setRowData] = useState({
    username: "",
    id: "",
    phone: "",
    creationDate: "",
    email: "",
  });

  const handleClick = (row) => {
    setDialogData(row.original);

    setRowData({
      username: row.original.Username,
      id: row.original.ID,
      phone: row.original.Phone,
      creationDate: row.original.Creation_Date,
      email: row.original.Email,
    });

    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setDialogData(null);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    state, // contains several properties.
    setGlobalFilter,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;
  return (
    <div class="table-container">
      <div class="search-container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table id="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "↓" : "↑") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleClick(row)}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className=" py-2 flex items-center text-gray-600">
        Page <strong className="ml-1 text-black">{pageIndex + 1}</strong>
      </span>
      <div className="flex justify-center mt-2 space-x-4">
        <button
          className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 ${
            !canPreviousPage && "pointer-events-none"
          }`}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 ${
            !canPreviousPage && "pointer-events-none"
          }`}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 ${
            !canNextPage && "pointer-events-none"
          }`}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 ${
            !canNextPage && "pointer-events-none"
          }`}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <Dialog rowData={{ ...rowData }} handleClose={handleCloseDialog} />
        </div>
      )}
    </div>
  );
};

export default User;
