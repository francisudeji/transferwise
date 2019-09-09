import React from 'react'
import Downshift from 'downshift'
import { FaSearch } from 'react-icons/fa'

function Dropdown({ items, onChange, initialHighlightedIndex }) {
  return (
    <Downshift
      onChange={onChange}
      itemToString={item => (item ? item.name : '')}
      isOpen={true}
      initialHighlightedIndex={initialHighlightedIndex}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex
      }) => (
        <div className='relative'>
          <FaSearch className='text-gray-400 z-10 ml-4 mt-5 absolute left-0 top-0 text-lg' />
          <input
            autoFocus
            className='block w-full pl-6 text-lg py-3 border-b-2 border-gray-200 mx-4 outline-none'
            placeholder='Type a currency / country'
            {...getInputProps()}
          />
          <ul {...getMenuProps()} className='my-3'>
            {isOpen
              ? items
                  .filter(
                    item =>
                      !inputValue.toLowerCase() ||
                      item.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()) ||
                      item.code.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <li
                      className={
                        highlightedIndex === index
                          ? 'cursor-pointer p-4 text-lg bg-gray-200 text-dark-blue'
                          : 'cursor-pointer p-4 text-lg bg-white text-dark-blue'
                      }
                      style={{
                        backgroundColor:
                          initialHighlightedIndex === index && '#2e4369',
                        color: initialHighlightedIndex === index && '#fff'
                      }}
                      {...getItemProps({
                        key: item.name,
                        index,
                        item
                      })}
                    >
                      <span>
                        <img
                          className='w-6 inline-block'
                          src={`/static/${item.flag}`}
                          alt=''
                        />{' '}
                      </span>{' '}
                      {item.code && (
                        <>
                          <span className='font-normal'>{item.code}</span>{' '}
                        </>
                      )}
                      <span className={`font-hairline text-gray-600 text-base`}>
                        {item.name}
                      </span>
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  )
}

export default Dropdown

//  style: {
//                           backgroundColor:
//                             highlightedIndex === index ? 'lightgray' : 'white',
//                           fontWeight: selectedItem === item ? 'bold' : 'normal'
//                         }
