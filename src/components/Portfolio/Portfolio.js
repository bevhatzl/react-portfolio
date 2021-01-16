import React, {Component} from "react";
import Project from '../Project/Project';
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
                        image: 'assets/img/portfolio/burger.png'
                    },
                    obj2: {
                        title: 'Weather Dashboard',
                        text: 'Uses the Open Weather api to get current weather data and a 5 day forecast based on the city searched.',
                        deployed: 'https://bevhatzl.github.io/weather-dashboard/',
                        github: 'https://github.com/bevhatzl/weather-dashboard',
                        image: 'assets/img/portfolio/weather.png'
                    },
                    obj3: {
                        title: 'Wot2Watch',
                        text: 'A project in which I used The Move DB to allow user to search most popular movies and tv series by genre. Displays 10 results at a time. Fully responsive.',
                        deployed: 'https://bevhatzl.github.io/Wot2Watch/',
                        github: 'https://github.com/bevhatzl/Wot2Watch',
                        image: 'assets/img/portfolio/wot2watch.png'
                    },
                    obj4: {
                        title: 'Pacific Point Hotel',
                        text: 'Pacific Point is a fictional hotel web app that lets users book a room for their chosen dates. It features a user login that saves user data to a database so a customer can login and view their bookings. An Admin user can view which rooms have been booked and by whom.',
                        deployed: 'https://guarded-river-60808.herokuapp.com/',
                        github: 'https://github.com/bevhatzl/Project02',
                        image: 'assets/img/portfolio/PacificPoint.png'
                    },
                    obj5: {
                        title: 'Work Day Scheduler',
                        text: 'A day planner. Uses the moment.js library to work dates. Allows the user to type their schedule into the corresponding time-frame. Clicking Save will save the entered data in local storage.',
                        deployed: 'https://bevhatzl.github.io/scheduler/',
                        github: 'https://github.com/bevhatzl/scheduler',
                        image: 'assets/img/portfolio/scheduler.png'
                    },
                    obj6: {
                        title: 'Code Quiz',
                        text: 'A timed multiple choice quiz with questions on coding. The timer counts down and the finish time is the final score. Points are deducted for incorrect guesses. High score page keeps a record in local storage.',
                        deployed: 'https://bevhatzl.github.io/code-quiz/',
                        github: 'https://github.com/bevhatzl/code-quiz',
                        image: 'assets/img/portfolio/quiz.png'
                    },
                }
            ]
        }
    }

    render() {
        return (
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <Project data={this.state.data.projects[0].obj1} />
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2"></div>
                            <Project data={this.state.data.projects[0].obj2} />
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3"></div>
                            <Project data={this.state.data.projects[0].obj3} />
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4"></div>
                            <Project data={this.state.data.projects[0].obj4} />
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5"></div>
                            <Project data={this.state.data.projects[0].obj5} />
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6"></div>
                            <Project data={this.state.data.projects[0].obj6} />
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}

export default Portfolio;