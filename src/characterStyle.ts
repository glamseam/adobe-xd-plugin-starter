import { characterStyles, CharacterStyle } from 'assets'

interface CharStyleObj {
    'font-size': string
    'letter-spacing': string
    'line-height': number
    name: string | undefined
}

const roundNumber = (number: number, digit: number = 2) => {
    return Math.round(number * Math.pow(10, digit)) / Math.pow(10, digit)
}

const toCssLetterSpacing = (charSpacing: CharacterStyle['charSpacing']) => {
    return `${charSpacing / 1000}em`
}

const toCssLineHeight = (
    fontSize: CharacterStyle['fontSize'],
    charSpacing: CharacterStyle['charSpacing']
) => {
    return roundNumber(charSpacing / fontSize, 3)
}

export const genCssStylesFromAssets = () => {
    const types: CharStyleObj[] = []

    characterStyles.get().forEach((charStyles) => {
        const {
            fontSize,
            charSpacing,
            lineSpacing
        } = charStyles.style

        const charStyleObj: CharStyleObj = {
            'font-size': `${roundNumber(fontSize)}px`,
            'letter-spacing': toCssLetterSpacing(charSpacing),
            'line-height': toCssLineHeight(roundNumber(fontSize), lineSpacing),
            name: charStyles.name
        }

        types.push(charStyleObj)
    })

    return { typographyTypes: types }
}
