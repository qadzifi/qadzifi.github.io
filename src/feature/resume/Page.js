import React from 'react';
import './Style.css';
import profilePhoto from './resources/picture/Profile Picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  regular,
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import {
} from '@fortawesome/free-regular-svg-icons';
import {
} from '@fortawesome/free-solid-svg-icons';

export default function Resume(props:object) {
  return (
    <div id='resume-root'>
      <div id='resume-header'>
        <div id='resume-profile-photo'>
          <img
            id='profile-picture'
            src={profilePhoto}
            alt='profile-photo'
          />
        </div>
        <div id='resume-profile-nick'>
          <div id='resume-fullname'>
            <h1>Qadzif Kamil Zahari</h1>
          </div>
          <div id='resume-current-title'>
            <h1>
              Final Year Student at Faculty of
              Computer Science Universitas Indonesia
            </h1>
          </div>
        </div>
      </div>
      <div id='resume-body'>
        <div id='resume-left-side'>
          <div id='resume-contacts'>
            <h4>Contacts</h4>
            <h5>
              <table>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={solid('phone')} />
                  </td>
                  <td>
                    +62 821 2211 8147
                  </td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={regular('envelope')}/>
                  </td>
                  <td>
                    qadzifi@gmail.com
                  </td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={solid('location-dot')}/>
                  </td>
                  <td>
                    Kabupaten Tangerang, Indonesia
                  </td>
                </tr>
              </table>
              <div>
              </div>
            </h5>
          </div>
          <div id='resume-skills'>
            <h4>Skills</h4>
            <h5>
              <ul>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Graphic Design</li>
                <li>Game Developer</li>
                <li>Motion Graphic</li>
              </ul>
            </h5>
          </div>
          <div id='resume-education'>
            <h4>Education</h4>
            <h5>
              <ul>
                <li>
                  <div>2018 - 2022 (Expected)</div>
                  <div>Computer Science</div>
                  <div>Universitas Indonesia</div>
                </li>
              </ul>
            </h5>
          </div>
          <div id='resume-education'>
            <h4>Languages</h4>
            <h5>
              <ul>
                <li>
                  English - Conversational
                </li>
                <li>
                  Indonesia - Native
                </li>
              </ul>
            </h5>
          </div>
        </div>
        <div id='resume-right-side'>
          <div id='resume-aboutme'>
            <h4>About Me</h4>
            <h6>
              <span>
                I’m a student from Faculty of Computer Science at Universitas
                Indonesia. I’m really passionate at programming. Experinced in
                a lot of programming fields including Game Development, Frontend
                Development, and Backend Development. Willing to learn new
                technology to keep up with the current technology. I’m also a
                good listener and willing to communicate with team.
              </span>
            </h6>
          </div>
          <div id='resume-experience'>
            <h4>Experience</h4>
            <ul>
              <li>
                <div>30 August - 31 December 2021</div>
                <div>Fullstack Developer</div>
                <div>IGRI</div>
                <div>
                  <span>
                    Develop chat feature backend at IGRI website. Chat feature
                    deceloped with websocket and have fallback to interval
                    polling when websocket don’t work.
                    <br />
                    Develop frontend for forum feature. Frontend page including
                    creating threads, showing thread, making comment, and reply
                    to comment.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div id='resume-proefficient'>
            <h4>Proefficient</h4>
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>Node JS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Unity 3D</li>
              <li>Godot Engine</li>
              <li>GIMP</li>
              <li>Inkscape</li>
              <li>Krita</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
