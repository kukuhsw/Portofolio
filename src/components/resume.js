import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Kukuh Satrio Wibowo</h2>
            <h4 style={{color: 'grey'}}>Devops Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>Kukusan, Beji, Depok</p>
            <h5>Phone</h5>
            <p>085878178757</p>
            <h5>Email</h5>
            <p>kukuhsatriowibowo#gmail.com</p>
            <h5>Web</h5>
            <p>kukuhsatriowibowo.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Pendidikan</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Universitas Pancasila"
              schoolDescription=""
               />

               <Education
                 startYear={2017}
                 endYear={2014}
                 schoolName="Institut Pertanian Bogor"
                 schoolDescription=""
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="PT Patner Impian Milenial"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="PT Nano Center Indonesia"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C"
                progress={100}
                />
              <Skills
                skill="Java"
                progress={80}
              />
              <Skills
                skill="Bash"
                progress={100}
              />
              <Skills
                skill="Golang"
                progress={100}
              />
              <Skills
                skill="AWS"
                progress={25}
              />
              <Skills
                skill="DCP"
                progress={25}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
