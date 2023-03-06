import './widget.scss';

export type WidgetProps = {
    value: number,
    text: string,
    unit: string
}

function Widget({value, text, unit}: WidgetProps) {
    // <> toto moze byt aj React.Fragment, alebo proste <div>
  return (
    <div className='widget'>  
        <div className='widget-value'>
            {value} {unit}
        </div>
        <div className='widget-title'>
            {text}
        </div>
    </div>
  )
}

export default Widget;