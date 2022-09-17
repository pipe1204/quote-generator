
//components
import Button from "./Button"

const Card = ({quotePicked, colorPicked, pickAgain}) => {

    const {quote, author} = quotePicked

  return (
    <div className="div--card">
        <h1 className='card--heading'>Welcome to Quote of the day!</h1>
        <h2 className='card--subheading'>If you don't like your quote, simply click the "Next" button to randomly get a new quote</h2>
        <div className='card' style={{color: colorPicked}}>
            <span>" </span>
            <p className='card--sentence'>{quote}</p>
            <h2 className='card--author'>{author}</h2>
            <Button 
                colorPicked = {colorPicked}
                pickAgain={pickAgain}
            />
        </div>
    </div>
  )
}

export default Card