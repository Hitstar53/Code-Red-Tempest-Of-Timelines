import { useCustomization, wireColors } from "../../contexts/Customization";

const Configurator = () => {
    const { material, setMaterial } = useCustomization();
    const { sideWire, setSideWire } = useCustomization();
    const { wire1Color, setWire1Color } = useCustomization();
    const { wire2Color, setWire2Color } = useCustomization();
    const { wire3Color, setWire3Color } = useCustomization();

    // console.log('material', material);

    return (<div className="configurator">
        <div className="configurator__section">
            <div className="configurator__section__title">
                Bomb Material
            </div>
            <div className="configurator__section__values">
                <div className={`item ${material === 'wood' ? 'item--active' : ''}`} onClick={() => setMaterial('wood')}>
                    <div className="item__label" >
                        Wood
                    </div>
                </div>
                <div className={`item ${material === 'metal' ? 'item--active' : ''}`} onClick={() => setMaterial('metal')}>
                    <div className="item__label" >
                        Metal
                    </div>
                </div>
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Wire Beside the Numpad
            </div>
            <div className="configurator__section__values">
                <div className={`item ${sideWire === true ? 'item--active' : ''}`} onClick={() => setSideWire(true)}>
                    <div className="item__label" >
                        Rewire
                    </div>
                </div>
                <div className={`item ${sideWire === false ? 'item--active' : ''}`} onClick={() => setSideWire(false)}>
                    <div className="item__label" >
                        Cut
                    </div>
                </div>
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Wire 1 Color
            </div>
            <div className="configurator__section__values">
                {wireColors.map((item, index) => (
                    <div key={index} className={`item ${item.color === wire1Color.color ? 'item--active' : ''}`} onClick={() => setWire1Color(item)}>
                        <div className="item__dot" style={{ backgroundColor: item.color }} />
                        <div className="item__label" >
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Wire 2 Color
            </div>
            <div className="configurator__section__values">
                {wireColors.map((item, index) => (
                    <div key={index} className={`item ${item.color === wire2Color.color ? 'item--active' : ''}`} onClick={() => setWire2Color(item)}>
                        <div className="item__dot" style={{ backgroundColor: item.color }} />
                        <div className="item__label" >
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Wire 3 Color
            </div>
            <div className="configurator__section__values">
                {wireColors.map((item, index) => (
                    <div key={index} className={`item ${item.color === wire3Color.color ? 'item--active' : ''}`} onClick={() => setWire3Color(item)}>
                        <div className="item__dot" style={{ backgroundColor: item.color }} />
                        <div className="item__label" >
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>
        </div>

        

    </div>);
}

export default Configurator;