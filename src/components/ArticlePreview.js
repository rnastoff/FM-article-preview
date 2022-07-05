import { useState } from 'react';

import classes from './ArticlePreview.module.css';

import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import iconFacebook from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconPinterest from '../images/icon-pinterest.svg';

import Card from './Card';


const ArticlePreview = () => {

  const [toolTipVisible, setToolTipVisible] = useState(false);

  const handleToolTip = () => {
    setToolTipVisible((toolTipVisible) => !toolTipVisible);
  }

  return (
    <Card>
      <div className={classes.left}>
        <img src={drawers} alt="drawers" />
      </div>

      <div className={classes.right}>
        <h1>Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to
          help you make any room feel complete.
        </p>

        <div className={classes.footer}>
          <div className={classes.author}>
            <img src={avatar} alt="avatar" />
            <div className={classes.nameGroup}>
              <div className={classes.name}>Michelle Appleton</div>
              <div className={classes.date}> 28 June 2020</div>
            </div>
          </div>

          <div className={classes.socialMedia}>
            <button onClick={handleToolTip}>
              <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {toolTipVisible &&
        <div className={classes.toolTip}>
          <div className={classes.toolTip__group}>
            <div className={classes.toolTip__text}>SHARE</div>
            <a href="#"><img src={iconFacebook} alt="facebook" /></a>
            <a href="#"><img src={iconTwitter} alt="twitter" /></a>
            <a href="#"><img src={iconPinterest} alt="pinterest" /></a>
          </div>

          <button onClick={handleToolTip}>
            <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
          </button>
        </div>
      }
    </Card>
  )
}

export default ArticlePreview;