import React from "react";

export const TableHead = ({ currentSort, sortTypes, onSortChange }) => {
  return (
    <div className="table_head">
      <section className="table__section">
        <table className="table__body">
          <thead>
            <tr className="tab__head">
              <th className="tab_head_title gap_ccs">
                Name
                <button onClick={() => onSortChange("name")}>
                  <i
                    className={`fas fa-fw fa-${sortTypes["name"][currentSort].class}`}
                  ></i>
                </button>
              </th>
              <th className="tab_head_title">
                E-Mail address
                <button onClick={() => onSortChange("email")}>
                  <i
                    className={`fas fa-fw fa-${sortTypes["email"][currentSort].class}`}
                  ></i>
                </button>
              </th>
              <th className="tab_head_title">
                Phone number
                <button onClick={() => onSortChange("phone")}>
                  <i
                    className={`fas fa-fw fa-${sortTypes["phone"][currentSort].class}`}
                  ></i>
                </button>
              </th>
              <th className="tab_head_title"></th>
            </tr>
          </thead>
        </table>
      </section>
    </div>
  );
}