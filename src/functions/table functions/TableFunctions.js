
const TableFunctions = {
    newVol: (volume) => {
        const Precision = 4;
        const numberregex = /[0-9]/gi;
        const commaregex = /,/gi
        const newVol = Number(volume.toPrecision(Precision)).toLocaleString('en')
        const VolNumCount = newVol.match(numberregex).length;
        const formattednewVol = () => {
            if (String(newVol).match(numberregex)) {
                const newVolNumSplit = newVol.replaceAll(commaregex, '').split('');
                if (VolNumCount === 11) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}.${newVolNumSplit[2]}${newVolNumSplit[3]}`
                } else if (VolNumCount === 10) {
                    return `${newVolNumSplit[0]}.${newVolNumSplit[1]}${newVolNumSplit[2]}`
                } else if(VolNumCount === 9) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}${newVolNumSplit[2]}.${newVolNumSplit[3]}${newVolNumSplit[4]}`
                } else if (VolNumCount === 8) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}.${newVolNumSplit[2]}${newVolNumSplit[3]}`
                } else if (VolNumCount === 7) {
                    return `${newVolNumSplit[0]}.${newVolNumSplit[1]}${newVolNumSplit[2]}`
                } else if (VolNumCount === 6) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}${newVolNumSplit[2]}.${newVolNumSplit[3]}${newVolNumSplit[4]}`
                } else if (VolNumCount === 5) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}.${newVolNumSplit[2]}${newVolNumSplit[3]}`
                } else if (VolNumCount === 4) {
                    return `${newVolNumSplit[0]}.${newVolNumSplit[1]}${newVolNumSplit[2]}`
                }

            }
        }
        if (commaregex.test(newVol)) {
            const Abbreviation = () => {
                if (newVol.match(commaregex).length > 0) {
                    const CommaCount = newVol.match(commaregex).length;
                    if (CommaCount === 3) {
                        return `${formattednewVol()}B`
                    } else if (CommaCount === 2) {
                        return `${formattednewVol()}M`
                    } else if (CommaCount === 1) {
                        return `${formattednewVol()}TH`
                    }
                }
            }
            return `$${Abbreviation()}`
        }
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
    },
    setSparklineColor: (weeklyChange) => {
        if (Math.sign(weeklyChange) === 1) {
            return '#23a455'
        } else if (Math.sign(weeklyChange) === -1) {
            return 'red'
        } else if (Math.sign(weeklyChange) === 0) {
            return 'black'
        }
    }
}
export default TableFunctions;