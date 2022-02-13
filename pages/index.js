import React from 'react'

const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const ListContainer = () => (
  <List
    items={['Learn with M. Elzanaty', 'React JS', 'Next JS', 'Node JS', '??', 'You will get 💰']}
  />
)

export default ListContainer
