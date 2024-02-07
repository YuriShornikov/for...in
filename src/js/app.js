export default function sortObj (obj, setObj) {
    const result = [];
    const setObjKeys = [];

    // получаем заданные сортировкой ключи
    for (const key of setObj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            setObjKeys.push(key);
        } else {

            // выводим ошибку, если заданные ключи отсутствуют
            throw new Error(`Not a key`);
        }
    }

    // сортируем остатки ключей массива
    const remainingKeys = Object.keys(obj).filter(key => !setObjKeys.includes(key)).sort();

    // добавляем эти сортированные остатки в результат
    for (const key of [...setObjKeys, ...remainingKeys]) {
        result.push({key, value: obj[key]});
    }
    return result;
}