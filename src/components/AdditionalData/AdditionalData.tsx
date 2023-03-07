import Widget, { WidgetProps } from "./Widget";
import "./additionaldata.scss";

type AdditionalProps = {
    data: WidgetProps[]
}

// key by mohol byt uuid 
function AdditionalData({data}:AdditionalProps) {
    return (
        <div>
            {data.map(props => (
                <Widget 
                    key={props.text} 
                    value={props.value} 
                    unit={props.unit} 
                    text={props.text} 
                />
            ))}
        </div>
    )
}

export default AdditionalData;