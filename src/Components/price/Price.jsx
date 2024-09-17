import './Price.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export function Price() {
  return (
    <>
      <h2>Affordable Prices</h2>
      <p>Choose a plan that suits you</p><br/>
      <div className="block">
        <h4>Basic Plan</h4>
        <p>1 mock interview with feedback</p><br />
        <ul className="no-bullets">
          <li>
            <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />
            Detailed feedback
          </li>
          <li>
            <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />
            Session Recording
          </li>
          <li>
            <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />
            Expert Coaching
          </li>
          <li>
            <FontAwesomeIcon className="fa-icon" icon={faCircleCheck} />
            Personalized coaching
          </li>
        </ul>
      </div>
    </>
  );
}
