import React, {Component} from "react";
import Project from '../Project/Project';
import burger from '../../assets/burger.png';
import weather from '../../assets/weather.png';
import wot2watch from '../../assets/wot2watch.png';
import hotel from '../../assets/PacificPoint.png';
import scheduler from '../../assets/scheduler.png';
import quiz from '../../assets/quiz.png';
// import "./style.css";

// Portfolio
class Portfolio extends Component {
    state = {
        data: {
            projects: [
                {
                    obj1: {
                        title: 'Eat Da Burger',
                        text: 'A project in which the database is updated when the user enters new burgers and "devours" burgers.',
                        deployed: 'https://young-taiga-59884.herokuapp.com/',
                        github: 'https://github.com/bevhatzl/burger',
                        image: burger
                    },
                    obj2: {
                        title: 'Weather Dashboard',
                        text: 'Uses the Open Weather api to get current weather data and a 5 day forecast based on the city searched.',
                        deployed: 'https://bevhatzl.github.io/weather-dashboard/',
                        github: 'https://github.com/bevhatzl/weather-dashboard',
                        image: weather
                    },
                    obj3: {
                        title: 'Wot2Watch',
                        text: 'A project in which I used The Move DB to allow user to search most popular movies and tv series by genre. Displays 10 results at a time. Fully responsive.',
                        deployed: 'https://bevhatzl.github.io/Wot2Watch/',
                        github: 'https://github.com/bevhatzl/Wot2Watch',
                        image: wot2watch
                    },
                    obj4: {
                        title: 'Pacific Point Hotel',
                        text: 'Pacific Point is a fictional hotel web app that lets users book a room for their chosen dates. It features a user login that saves user data to a database so a customer can login and view their bookings. An Admin user can view which rooms have been booked and by whom.',
                        deployed: 'https://guarded-river-60808.herokuapp.com/',
                        github: 'https://github.com/bevhatzl/Project02',
                        image: hotel
                    },
                    obj5: {
                        title: 'Work Day Scheduler',
                        text: 'A day planner. Uses the moment.js library to work dates. Allows the user to type their schedule into the corresponding time-frame. Clicking Save will save the entered data in local storage.',
                        deployed: 'https://bevhatzl.github.io/scheduler/',
                        github: 'https://github.com/bevhatzl/scheduler',
                        image: scheduler
                    },
                    obj6: {
                        title: 'Code Quiz',
                        text: 'A timed multiple choice quiz with questions on coding. The timer counts down and the finish time is the final score. Points are deducted for incorrect guesses. High score page keeps a record in local storage.',
                        deployed: 'https://bevhatzl.github.io/code-quiz/',
                        github: 'https://github.com/bevhatzl/code-quiz',
                        image: quiz
                    },
                }
            ]
        }
    }

    render() {
        return (
            <section className="page-section portfolio jumpTop" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <Project data={this.state.data.projects[0].obj1} />
                                <img className="img-fluid" src={this.state.data.projects[0].obj1.image} alt="Screenshot of app" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">       
                            <Project data={this.state.data.projects[0].obj2} />
                            <img className="img-fluid" src={this.state.data.projects[0].obj2.image} alt="Screenshot of app" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <Project data={this.state.data.projects[0].obj3} />
                            <img className="img-fluid" src={this.state.data.projects[0].obj3.image} alt="Screenshot of app" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <Project data={this.state.data.projects[0].obj4} />
                            <img className="img-fluid" src={this.state.data.projects[0].obj4.image} alt="Screenshot of app" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <Project data={this.state.data.projects[0].obj5} />
                            <img className="img-fluid" src={this.state.data.projects[0].obj5.image} alt="Screenshot of app" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <Project data={this.state.data.projects[0].obj6} />
                            <img className="img-fluid" src={this.state.data.projects[0].obj6.image} alt="Screenshot of app" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}

export default Portfolio;