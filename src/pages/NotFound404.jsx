import './NotFound.css'

export default function ErrorPage() {
  

  return (
    <div id="error-page" className="errorPage">
      <h2 className='Opps'>Oops!</h2>

      <img className='imgNF' src="/404-error.png" alt="" />

      <p className='oops-p'>Sorry, an unexpected error has occurred.</p>
      
    </div>
  );
}