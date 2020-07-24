import './table-sorty.scss';

export default class TableSorty {
    constructor(config) {
        this.config = config;
        this.data = [];

        const sourceEl = document.querySelectorAll(this.config.table);
        if (!sourceEl || !sourceEl.length) return false;

        sourceEl.forEach(table => {
            fetch(this.config.url).then(res => res.json()).then(res => {
                this.data = res;
                this.getHeaders(this.data);
                this.hydrateTable(this.data);

                table.addEventListener('click', this.selectRow().bind(this));

                if (this.config.hasSearch) {
                    this.addSearch(table);
                }

                if (this.config.itemsPerPage) {
                    this.pages = Math.ceil(this.data.length / this.config.itemsPerPage);
                    this.addPagination(table);
                    this.selectPage(table);
                }

            }).catch(err => {
                console.error(err)
            });
        })
    }

    addPagination(table) {
        const pagination = document.createElement('ul');
        pagination.classList.add('table-sortable-pagination');

        for(let i = 1; i <= this.pages; i++) {
            const li = document.createElement('li');
            li.innerText = i;
            pagination.appendChild(li);
        };

        table.parentNode.appendChild(pagination);
    }

    updatePagination(len) {
        const pagination = document.querySelector('.table-sortable-pagination');

        pagination.innerHTML = '';
        const pages = Math.ceil(len / this.config.itemsPerPage);
        for(let i = 1; i <= pages; i++) {
            const li = document.createElement('li');
            li.innerText = i;
            pagination.appendChild(li);
        };
    }

    getColsNum(table) {
        return table.querySelectorAll('thead th').length;
    }

    getTable() {
        return document.querySelector(this.config.table);
    }

    sortColumn(id, type, th) {
        // const table = this.getTable();
        // const tbody = table.querySelector('tbody');
        let compareFunc;
        const asc = th.dataset.asc === 'true';

        switch(type) {
            case 'number': 
                compareFunc = function(rowA, rowB) {
                    return asc ? rowA[id] - rowB[id] : rowB[id] - rowA[id];
                };
                break;
            case 'string':
                compareFunc = function(rowA, rowB) {                    
                    return asc == true ? (rowA[id].toLowerCase() > rowB[id].toLowerCase() ? 1 : -1) : (rowA[id].toLowerCase() < rowB[id].toLowerCase() ? 1 : -1);
                };
                break;
        }
        th.dataset.asc = !asc;

        let data = this.data.sort(compareFunc);
        if(this.filteredData && this.filteredData.length) {
            data = this.filteredData.sort(compareFunc);
        } 

        this.clearTable();
        this.hydrateTable(data);
    }

    selectRow() {
        return function(e) {
            const table = this.getTable();
            const tr = e.target.closest('tbody tr');
            if (!tr) return false;

            const id = tr.dataset.id;
            const data = this.data.filter(row => row.id == id)[0];
            
            const elId = `${this.config.table}-results`;
            let el = document.getElementById(elId);
            if (el) {
                table.parentNode.removeChild(el);
            }
            el = document.createElement('div');
            el.id = elId;
            el.classList.add('table-sortable-results');

            el.innerHTML = `<p>Выбран пользователь: <b>${data.firstName} ${data.lastName}</b></p>
            <p>Описание:</p>
            <textarea>${data.description}</textarea>
            <p>Адрес проживания: <b>${data.adress.streetAddress}</b></p>
            <p>Город: <b>${data.adress.city}</b></p>
            <p>Провинция/штат: <b>${data.adress.state}</b></p>
            <p>Индекс: <b>${data.adress.zip}</b></p>`

            table.parentNode.appendChild(el);
            el.scrollIntoView({behavior: "smooth"});

            // return data.adress;
        }
    }

    selectPage(table) {
        const self = this;
        const pagination = document.querySelector('.table-sortable-pagination');

        pagination.addEventListener('click', function(e) {
            if(e.target.closest('li')) {
                self.selectedPage = +e.target.innerText;
                // console.log(self.selectedPage);
                const data = (self.filteredData && self.filteredData.length) ? self.filteredData : self.data;
                // const drawData = data.slice((self.selectedPage - 1) * self.config.itemsPerPage, (self.selectedPage - 1) * self.config.itemsPerPage + self.config.itemsPerPage);
                self.clearTable();
                self.hydrateTable(data);
            }
        })
    }

    addSearch(table) {
        const self = this;
        const searchRow = document.createElement('caption');

        const search = document.createElement('input');
        search.type = 'search';
        searchRow.appendChild(search);

        const searchBtn = document.createElement('button');
        searchBtn.innerText = 'Search';
        searchBtn.type = 'button';
        searchRow.appendChild(searchBtn);

        table.appendChild(searchRow);

        searchBtn.addEventListener('click', function(){
            self.selectedPage = 1;
            let filterData = self.data;

            if (!search.value.length) {
                self.filteredData = [];
            } else {
                filterData = self.filteredData = self.data.filter(row => {
                    const keys= Object.keys(row)
                    const searchIn = Object.values(row);
    
                    for (let i = 0; i < searchIn.length; i++) {
                        if(keys[i] === 'adress' || keys[i] === 'description') continue;
                        if (searchIn[i].toString().toLowerCase().indexOf(search.value.toLowerCase()) !== -1) {
                            return true
                        }
                    }
                });
            }

            self.clearTable();
            self.hydrateTable(filterData);
            self.updatePagination(filterData.length);
        })
    }

    getHeaders(data) {
        const self = this;
        const table = this.getTable();
        const tHead = document.createElement('thead');
        const tRow = document.createElement('tr');
        const headers = Object.keys(this.data[0]);
        const types = Object.values(this.data[0]);
        

        for(const cell in headers) {
            if (headers[cell] === 'adress' || headers[cell] === 'description') continue;
            const tH = document.createElement('th');
            tH.dataset.asc = true;
            tH.innerHTML = `<span>${headers[cell]}</span>`;
            tRow.appendChild(tH);
            
            tH.addEventListener('click', function(){
                const actives = table.querySelectorAll('th.active');
                if (actives.length) {
                    actives.forEach(item => item.classList.remove('active'));
                }
                this.classList.add('active');
                self.sortColumn(headers[cell], typeof types[cell], tH);
            });
        }

        tHead.appendChild(tRow);
        table.appendChild(tHead);
    }

    clearTable() {
        const table = this.getTable();
        const tBody = table.querySelector('tbody');

        table.removeChild(tBody);
    }

    hydrateTable(data) {
        const table = this.getTable();
        const tBody = document.createElement('tbody');

        if (!data) {
            const tRow = document.createElement('tr');
            tRow.innerHTML = `<td colspan="${this.getColsNum}">No data provided</td>`
        }

        
        if(!this.selectedPage) {
            this.selectedPage = 1;
        }

        const items = this.selectedPage < 2 ? this.config.itemsPerPage : (this.selectedPage - 1) * this.config.itemsPerPage + this.config.itemsPerPage;
        const drawData = data.slice((this.selectedPage - 1) * this.config.itemsPerPage, items);
        // console.log(data, this.data, drawData);

        drawData.map(row => {
            const tRow = document.createElement('tr');
            tRow.dataset.id = row.id;
           
            for(const cell in row) {
                if (typeof row[cell] !== "object" && cell !== 'description') {
                    const tCell = document.createElement('td');
                    tCell.innerText = row[cell];
                    tRow.appendChild(tCell);
                }
            }
            tBody.appendChild(tRow);
        })

        table.appendChild(tBody)
    }
}