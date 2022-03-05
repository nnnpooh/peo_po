export function processRowData(pivotData) {
    const data = pivotData.map((el) => {
        return {
            ...el,
            po_group: el.po_group || [],
        };
    });

    //   const allPo = [...Array(11).keys()].map((el) => el + 1);
    const allPo = [...Array(11).keys()].map((el) => (el + 1).toString());
    const rowsTemplate = allPo.map((po) => {
        return {
            key: '',
            text: '',
            co: null,
            po: po,
            isMap: false,
            course_id: '',
        };
    });

    const dataMap = data.map((el) => {
        let rows = JSON.parse(JSON.stringify(rowsTemplate));

        rows = rows.map((row) => {
            const isMap = el.po_group.includes(row.po) ? true : false;
            return {
                ...row,
                key: `co-${el.co}_po-${row.po}`,
                co: el.co,
                text: isMap ? '✅' : '',
                isMap,
                course_id: el.course_id,
            };
        });

        return {
            ...el,
            key: `co-${el.co}`,
            text: `CO-${el.co}`,
            rows,
        };
    });

    return dataMap;
}

export function getHeaderData() {
    let allPo = [...Array(11).keys()].map((el) => el + 1);
    let headers = allPo.map((po) => {
        return {
            text: `PO-${po}`,
            key: `po-${po}`,
        };
    });
    headers.unshift({
        text: 'CO',
        key: 'co',
    });
    return headers;
}