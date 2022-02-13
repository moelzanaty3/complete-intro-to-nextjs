import React, { useState } from 'react'

const ListFC = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items)

  const handleFilterItems = (e) => {
    const searchValue = e.target.value
    const currentItems = [...items]
    const filteredItems = currentItems.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredItems(filteredItems)
  }
  return (
    <>
      <input onChange={handleFilterItems} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

class ListCC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredItems: this.props.items
    }
    this.handleFilterItems = this.handleFilterItems.bind(this)
  }

  handleFilterItems(e) {
    const searchValue = e.target.value
    const currentItems = [...this.props.items]
    const filteredItems = currentItems.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    )
    this.setState({ filteredItems })
  }

  render() {
    return (
      <>
        <input onChange={this.handleFilterItems} />
        <ul>
          {this.state.filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}

const ListContainer = () => (
  <ListFC
    items={['Learn with M. Elzanaty', 'React JS', 'Next JS', 'Node JS', '??', 'You will get 💰']}
  />
)

export default ListContainer
