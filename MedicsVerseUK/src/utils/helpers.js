export const removeValueFromArray = (array, value) => {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
export const makeArrayFromFilter = (filters, categories) => {

    var array = [];
    for (const key in filters) {
        if (Object.hasOwnProperty.call(filters, key)) {
            const element = filters[key];
            console.log(key, element)
            if (Array.isArray(element)) {
                array = array.concat(categories.filter(c => element.includes(c.id)).map(c => ({key:c, })))
            }
            else array.push(key + element)
        }

    }

    return array;
}