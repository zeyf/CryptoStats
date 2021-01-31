
const FormatFunctions = {
    newVol: (volume) => {
        const Precision = 4;
        const numberregex = /[0-9]/gi;
        const commaregex = /,/gi
        const newVol = Number(volume.toPrecision(Precision)).toLocaleString('en')
        const VolNumCount = newVol.match(numberregex).length;
        const formattednewVol = () => {
            if (String(newVol).match(numberregex)) {
                const newVolNumSplit = newVol.replaceAll(commaregex, '').split('');
                if (VolNumCount === 12) {
                    return `${newVolNumSplit[0]}${newVolNumSplit[1]}${newVolNumSplit[2]}.${newVolNumSplit[3]}${newVolNumSplit[4]}`
                } else if (VolNumCount === 11) {
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
            const AbbreviatedVolume = () => {
                if (newVol.match(commaregex).length > 0) {
                    const CommaCount = newVol.match(commaregex).length;
                    if (CommaCount === 3) {
                        return `${formattednewVol()}B`
                    } else if (CommaCount === 2) {
                        return `${formattednewVol()}M`
                    } else if (CommaCount === 1) {
                        return `${formattednewVol()}TH`
                    } else if (CommaCount === 0) {
                        return `${formattednewVol}`
                    }
                }
            }
            return `$${AbbreviatedVolume()}`
        }
    },
    newPrice: (price) => {
        if (String(price)[0] === '0') {
            return price.toFixed(4)
        } else if (String(price)[0] !== '0') {
            const DecimalSplit = String(price).split('.')
            const BeforeDecimal = Number(DecimalSplit[0]).toLocaleString('en')
            if (DecimalSplit[1]) {
                if (DecimalSplit[1].length === 1) {
                    return `${BeforeDecimal}.${DecimalSplit[1]}0`
                } else {
                    return `${BeforeDecimal}.${DecimalSplit[1]}`
                }
            } else {
                return `${BeforeDecimal}.00`
            }
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
    setCryptoPriceBGColor: (priceChange) => {
        if (Math.sign(priceChange) === -1) {
            return {
                color: 'white',
                backgroundColor: '#EA4646',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 5px 5px 5px'
            }
        } else if (Math.sign(priceChange) === 1) {
            return {
                color: 'white',
                backgroundColor: '#17D4A5',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 5px 5px 5px'
            }
        } else if (Math.sign(priceChange) === 0) {
            return {
                color: 'white',
                backgroundColor: '#333333',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 5px 5px 5px'
            }
        }
    },
    setLinkParamByID: (id) => {
        return `/cryptocurrencies/${id}`
    },
    addDirectionalTriangle: (priceChange) => {
        if (Math.sign(priceChange) === 1) {
            return '▴ '
        } else if (Math.sign(priceChange) === -1) {
            return '▾ '
        } else if (Math.sign(priceChange) === 0) {
            return '';
        }
    },
    format1DpriceChange: (priceChange) => {
        if (priceChange) {
            return priceChange.toFixed(2)
        } else {
            return '0.00'
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
    },
    nameShortener: (name) => {
        if (name.length > 20) {
            const NameSplit = name.split(/\s/gi);
            return NameSplit[0];
        } else {
            return name;
        }
    }
}
export default FormatFunctions;