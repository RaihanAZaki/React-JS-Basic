import React from 'react';

function Slides({slides}) {

  const [activeStep, setActiveStep] = React.useState(0);
  let allSlides = slides;

  const reset = () => {
    setActiveStep(0)
  }

  const next = () => {
    let step = activeStep;
    setActiveStep(++step)
  }
  
  const pre = () => {
    let step = activeStep;
    setActiveStep(--step)
  }

  const getContent = () => {

    let data = allSlides[activeStep];
    
    return <div id="slide" className="card text-center">
    <h1 data-testid="title">{data.title}</h1>
    <p data-testid="text">{data.text}</p>
</div>
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={() => reset()} data-testid="button-restart" className="small outlined" disabled={activeStep===0}>Restart</button>
                <button onClick={() => pre()} data-testid="button-prev" className="small" disabled={activeStep===0}>Prev</button>
                <button onClick={() => next()} data-testid="button-next" className="small" disabled={activeStep===allSlides.length-1}>Next</button>
            </div>
            {getContent()}
        </div>
    );

}

export default Slides;
