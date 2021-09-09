import React, { useState, useMemo } from "react";
import { rows, sortTypes } from "../data";
import { getUpdatedList, getMaxId } from "../utils";
import { AddUser } from "./AddUser";
import { TableWrapper } from "./TableWrapper";

export const TableContainer = () => {
  const [currentSort, setCurrentSort] = useState("down");
  const [data, setData] = useState(useMemo(() => rows, []));
  const saveUser = ({ id, name, email, phone }) => {    
    setData(getUpdatedList(data, { id, name, email, phone }));
  };

  const deleteUser = (id) => {
    const filteredData = data.filter((usr) => usr.id !== id);
    setData(filteredData);
  };

  const onSortChange = (field) => {
    let nextSort;
    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";
    setData([...data].sort(sortTypes[field][nextSort].fn));
    setCurrentSort(nextSort);
  };

  const onAddUser = (user) => {
    const id = getMaxId(data);
    user = {id, ...user};
    setData([...data, user]);
  };

  return (
    <>
      <AddUser 
        rows={data}
        onAdd={onAddUser} 
      />
      <TableWrapper
        data={data}
        sortTypes={sortTypes}
        currentSort={currentSort}
        onSortChange={onSortChange}
        onSave={saveUser}
        onDelete={deleteUser}
      />
    </>
  );
};
