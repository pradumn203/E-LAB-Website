import React from 'react';
import './modals.css';
import network from '../documents/networking.pdf';
import java from '../documents/java.pdf';
import iot from '../documents/iot.pdf';
import android from '../documents/android.pdf';
import embedded from '../documents/embedded.pdf';
import ar from '../documents/ar.pdf';
import ml from '../documents/ml.pdf';
import web from '../documents/web.pdf';

function modals() {
  return (
    <div>
      <div className='container-fluid'>
     
        <div className='row'>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={ar} target='_blank'>
                AR / VR
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={web} target='_blank'>
                WEB TECHNOLOGY
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={java} target='_blank'>
                JAVA
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={android} target='_blank'>
                ANDROID
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={ml} target='_blank'>
                MACHINE LEARNING
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={network} target='_blank'>
                NETWORKING
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={iot} target='_blank'>
                IOT
              </a>
            </h4>
          </div>
          <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
            <h4>
              <a href={embedded} target='_blank'>
                EMBEDDED SYSTEMS
              </a>
            </h4>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default modals;
