import reactLogo from './assets/react.svg'

function ReactLogos() {
    let logoCount = 7;
    return (
        <div>
            {Array.from({length: logoCount}).map(_ => <a > <img src={reactLogo} className="logo react" alt="React logo" /> </a>)}
        </div>
    )
}

export default ReactLogos

