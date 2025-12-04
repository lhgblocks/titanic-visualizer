import { useState, useCallback, useMemo } from "react";
import { Table, Form, Pagination } from "react-bootstrap";
import titanicData from "../data/titanic.json";
import { getTableData } from "../data/processData";
import { useSearch } from "../hooks/useSearch";
import { usePagination } from "../hooks/usePagination";
import "./TablePage.scss";

export default function TablePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const tableData = useMemo(() => getTableData(titanicData), []);

  const filteredData = useSearch(tableData, searchQuery, [
    "Name",
    "Sex",
    "Age",
  ]);

  const { currentPage, totalPages, paginatedData, next, prev, goTo } =
    usePagination(filteredData, 10);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handlePageChange = useCallback(
    (page) => {
      goTo(page);
    },
    [goTo]
  );

  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      items.push(
        <Pagination.First
          key="first"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
      );
      items.push(
        <Pagination.Prev
          key="prev"
          onClick={prev}
          disabled={currentPage === 1}
        />
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <Pagination.Next
          key="next"
          onClick={next}
          disabled={currentPage === totalPages}
        />
      );
      items.push(
        <Pagination.Last
          key="last"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      );
    }

    return items;
  };

  return (
    <div className="table-page">
      <h2>Raw Table Page</h2>

      <Form.Control
        type="text"
        placeholder="Search by name, sex, or age..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      <Table striped bordered hover responsive className="data-table">
        <thead>
          <tr>
            <th>Passenger ID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Fare</th>
            <th>Class</th>
            <th>Survived</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((passenger) => (
              <tr key={passenger.PassengerId}>
                <td>{passenger.PassengerId}</td>
                <td>{passenger.Name}</td>
                <td>{passenger.Sex}</td>
                <td>{passenger.Age ?? "N/A"}</td>
                <td>
                  {passenger.Fare != null
                    ? `$${passenger.Fare.toFixed(2)}`
                    : "N/A"}
                </td>
                <td>{passenger.Pclass}</td>
                <td>{passenger.Survived === 1 ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <Pagination>{renderPaginationItems()}</Pagination>
        </div>
      )}
    </div>
  );
}
