import './style-guide.css'

type ColorRGB = {
    r: number,
    g: number,
    b: number
}

function hexToRgb(hex: string): ColorRGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) throw new Error('unable to parse hex to rgb');
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }
}

const colorListToTable = (colorList: string[]) => {
    return colorList.map(c => {
        if (c === null) return <th></th>

        const rgb = hexToRgb(c);
        const rgbSum = rgb.r + rgb.g + rgb.b;

        const colorThGeneralStyle = {
            padding: '10px',
            backgroundColor: c,
            color: rgbSum < 120 ? '#F8F6F1' : '#15201D'
        }
        return <th style={colorThGeneralStyle}>{c}</th>
    });
}

const StyleGuide = () => {

    const colors = [
        '#82B5C4', // blue
        '#8BA465', // green
        '#AF4631', // red
        '#E7BB58', // yellow
        '#BC8E4E', // brown
        '#F8F6F1', // white
        '#15201D' // black
    ]

    const colors2 = [
        '#B6D685',
        '#8BA465',
        '#758A55',
        '#4A5736',
    ]


    const tableRows = [
        colorListToTable(colors2),
        colorListToTable(colors),
    ].map(tr => <tr>{tr}</tr>);


    return (
        <>
            <h1>Style Guide</h1>
            <p>This page contains all the information you will need when designing new webpages and products for the Cluster Mush brand</p>

            <h2>Keywords & Vibes</h2>
            <p><b>Friendly</b> - Cluster Mush should be warm and inviting. By doing this, a community like feel can be created.</p>
            <p><b>Simple</b> - Content and information provided should not be overly complicated or pretensous. Everything should have a feel closer to a farmers market or local store instead of a fine dinning experience or textbook.</p>
            <p><b>Organic</b> - Creating a deeper appreciation and connection with nature is a priority for Cluster Mush. To help with this, more naturla and irregular shapes and structures should be used over clean and precise geometric shapes.</p>
            <p><b>Educational</b> - Along with creating a deeper connection with nature, customers should also leave with a better understanding of fungus and their significance in nature and culture.</p>
            <p><b>Fun</b> - Cluster Mush should make fungi a fun and exciting topic to talk, learn, and think about.</p>
            <p><b>Chaotic</b> - As the name "Cluster Mush" suggests, the brand should not be locked into a single concept or medium. The goal is to spread knowledge and excitement for mushrooms which will lead to trying new ideas that catch the attention of others.</p>

            <h2>Color</h2>
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                    {tableRows}
                </tbody>
            </table>

            <h2>Fonts</h2>
            <p>We use 2 different fonts</p>
            <ul>
                <li>Eckmannpsych for displays and large text</li>
                <li>Ferdoka for small paragraph style text</li>
            </ul>

            <h2>Moodboard</h2>
            <a href="https://www.designspiration.com/thomasy314/clustermush/">DesignSpiration moon board</a>
        </>
    )
}

export default StyleGuide;