import TableSorty from './components/table-sorty';

new TableSorty({
    table: '#table-1',
    hasSearch: true,
    itemsPerPage: 50,
    url: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
})

new TableSorty({
    table: '#table-2',
    hasSearch: true,
    url: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|5}'

})
