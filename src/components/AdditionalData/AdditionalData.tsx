import Widget, { WidgetProps } from "./Widget";

const data: WidgetProps[] = [
    {
        value: 43,
        unit: "%",
        text: "humidity"
    },
    {
        value: 21,
        unit: "km/h",
        text: "wind speed"
    },
    {
        value: 1010,
        unit: "kPA",
        text: "pressure"
    }
]

// key by mohol byt uuid 
function AdditionalData() {
  return (
    <div>
        {data.map(props => (<Widget key={props.text} value={props.value} unit={props.unit} text={props.text}/>))}
        
    </div>
  )
}

export default AdditionalData;