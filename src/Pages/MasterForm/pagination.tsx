import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import {
 Pagination,
} from "@mui/material";

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState(10); // Initial items per page
  const [currentPage, setCurrentPage] = useState(1); // Initial current page

  const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const itemsPerPage = selectedValue;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  // Handle changes in the selected items per page
  const handleItemsPerPageChange = (event) => {
    setSelectedValue(event.target.value);
    setCurrentPage(1); // Reset current page when items per page changes
  };

  // Handle changes in the current page
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Select
        value={selectedValue}
        onChange={handleItemsPerPageChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <ul>
        {displayedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default MyComponent;
