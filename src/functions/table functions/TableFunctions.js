
const TableFunctions = {
    newVol: (volume) => {
        const StringVol = String(volume.toFixed(3))
        return StringVol.toLocaleString('en')
    },
    newPrice: (price) => {
        if (String(price)[0] === '0') {
            return price.toFixed(4)
        } else if (String(price)[0] !== '0') {
            return price.toFixed(2)
        }
    },
    setPriceColor: (priceChange) => {
        if (Math.sign(priceChange) === -1) {
            return {color: 'red'}
        } else if (Math.sign(priceChange) === 1) {
            return {color: '#23a455'}
        } else if (Math.sign(priceChange) === 0) {
            return {color: '#333333'}
        }
    },
    setLinkParamByID: (id) => {
        return `/cryptocurrencies/${id}`
    },
    addDirectionalTriangle: (priceChange) => {
        if (Math.sign(priceChange) === 1) {
            return '▴'
        } else if (Math.sign(priceChange) === -1) {
            return '▾'
        } else if (Math.sign(priceChange) === 0) {
            return;
        }
    }
}
export default TableFunctions;