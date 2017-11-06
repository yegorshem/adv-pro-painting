import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar'

const Review = styled.div`
  width: 100%;
  background-color: #2b2b2b;
  margin-bottom: 30px;
  text-align: center;
  padding: 20px
`

class Reviews extends Component {
  render() {
    return ([
      <NavBar />,
      <Review>
        <h3>Vanaja R. - Sammamish, WA</h3>
        <hr />
        Easy to work with. Pleased to work with, They were very committed.
        <h3>Julie G. - Issaquah, WA</h3>
        <hr />
        Professional,Timely, and did a great job!
        Very nice people to deal with too! I am contracting them for more needed services because they are so awesome to deal with and do such great work. could not be happier.
        <h3>Andre P. - Redmond, WA</h3>
        <hr />
        Very nice and professional. Did a very good job. No mess. Cleaned everything up nicely. Did job on time. 
        <h3>Patricia H. - Bellevue, WA</h3>
        <hr />
        Very professional and personable. Moved some heavy items out of the way before painting and cleaned up after the job was done Impeccable. This is really a 5 Star Outfit!!
        <h3>Joe S. - Redmond, WA</h3>
        <hr />
        3RD estimate and we knew right away that this was the pro for us!
        Knew their stuff and made suggestions that made sense. Very Pleased with the services. 
        <h3>Sash F. - Everett</h3>
        <hr />
        Great Job, No complaints
        <h3>Dean Dickinson. - woodinville</h3>
        <hr />
        Great. The attention to detail was terrific and they did a wonderful job of prepping the house prior to
        painting. They cleaned up each day and were really nice to work with - very professional and courteous. 
        We would definitely hire them again.
        <h3>Nancy Tripp. - Redmond, WA</h3>
        <hr />
        Their work was exceptional and all punch list items were handled immediately. They listened well 
        and were respectful to us and the property.
        <h3>Sam Burkman. - Woodinville, WA</h3>
        <hr />
        We called around FOREVER to find someone who would repaint our chimneys. It was a hard project 
        due to their placement--and it wasn't a big project so a lot of people just didn't want to take it on. E A 
        Painting did a fabulous job for us and we are very happy with the quality of work.
        <h3>Andrea Shimek. - Mapple Valley</h3>
        <hr />
        Excellent company to work with. Extremely responsive to texts and email. Showed up when they 
        said they said they would. Extremely respectful and courteous. Did great work.
        <h3>Aleksander M. - Federal way, WA</h3>
        <hr />
        Erik always called back right away if I had any questions, always on time. Crew did a great job. 
        Couldn't be happier
        <h3>Matt Lars. - Lynnwood, WA</h3>
        <hr />
        Went really well. Communication was fantastic. Team was punctual and very nice. The job was 
        perfect.
      </Review>
    ]);
  }
}

export default Reviews;
