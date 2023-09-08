import React from 'react';
import BXDropdown from 'carbon-web-components/es/components-react/dropdown/dropdown.js';
import BXDropdownItem from 'carbon-web-components/es/components-react/dropdown/dropdown-item.js';
const FeedBackPage = () => (
  <>
  <h1>FeedBack Page! 👋</h1>
  <div id="app">
  <BXDropdown triggerContent="Select an item">
  <BXDropdownItem value="all">Option 1</BXDropdownItem>
  <BXDropdownItem value="cloudFoundry">Option 2</BXDropdownItem>
  <BXDropdownItem value="staging">Option 3</BXDropdownItem>
  <BXDropdownItem value="dea">Option 4</BXDropdownItem>
  <BXDropdownItem value="router">Option 5</BXDropdownItem>
</BXDropdown>


</div>
  </>
)
  

export default FeedBackPage;