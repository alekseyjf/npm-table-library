<h2>
    Table library by Alex Morhun
</h2>

## Usage

First simple variant
```shell
    const data = [
        ['cell1', 'cell2', 'cell3', 'cell4'],
        ['cell1', 'cell2', 'cell3', 'cell4'],
        ['cell1', 'cell2', 'cell3', 'cell4'],
        ['cell1', 'cell2', 'cell3', 'cell4'],
    ];
    <Table 
        data={data} 
        onAdd={fn} 
        onRemove={fn} 
        onEdit={fn}
    />
```
Second custom table variant
```shell
    const data = {
        header: [
            { title: "title1" },
            { title: "title2" },
        ],
        rows: [
            [
                { value: "Test" },
                { value: 1 },
                { value: "test data" },
                { value: 20000000 },
                { value: "more test data text for example" }
            ]
        ]
    };
    <Table 
        data={data} 
        onAdd={fn} 
        onRemove={fn} 
        onEdit={fn}
    />
    fn(table) {
        //a new table will be returned in the parameter, 
        //on each event 
    }
```
## Install

With [npm](https://npmjs.org/) installed, run

```shell
npm install --save table_library_by_alex@1.0.2

or

yarn add table-library-by-Alex-Morhun
```

## License

ISC
