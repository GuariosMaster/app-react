import React from 'react';

const Aside = () => {
  return (
    <aside className="bg-light border-end" data-bs-theme="dark">
      <div className="p-3">
        <h4>Sidebar</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Item 1</li>
          <li className="list-group-item">Item 2</li>
          <li className="list-group-item">Item 3</li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;