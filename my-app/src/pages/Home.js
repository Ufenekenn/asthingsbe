import React from "react";
import {NavLink, Link} from "react-router-dom";

class Home extends React.Component{
    render() {
        return (

        <main>
            <section class="featured-stories">
                <h2>Featured Stories</h2>
                <div class="story-grid">
                    
                    <div class="story-card">
                        <img src="../images/firstImg.jpg" alt="story1" />
                        <h3>MANAGEMENT IN THE MUSIC BUSINESS</h3>
    
                        <p>A good mix makes your song more enjoyable and appealing.
                            You down play it’s importance to your own detriment.
                            @OGLexycon is a mix engineer with huge experience in the art & science.
                            He will be speaking at our workshop on Saturday, 24th of June.
                            Don’t miss it..</p>
    
                        <a href="story.html">Read more</a>
                    </div>
                    <div class="story-card">
                        <img src="../images/FzDnLDEWAAQ8yca.jpeg" alt="Welcome Nkuku" />
                        <h3>WELCOME NKUNKU</h3>
                        <p>Chelsea officials believe they have effectively landed three players in one in Nkunku, who has proved himself capable of
                        playing as a No 9, a No 10 or off the left, and Pochettino’s favoured 4-2-3-1 system, which can at times be a 4-3-3,
                        should suit him perfectly.</p>
                        <a href="story.html">Read more</a>
                    </div>
                    

                    <div class="story-card">
                        <img src="../images/zoe32.jpg" alt="Story 3"/>
                        <h3>HAPPY BIRTHDAY ZOE</h3>
                        <p>Happy Birthday to my wonderful daughter!

On this special day, I want to celebrate the incredible person you have become. From the moment you came into my life, you have filled it with joy, love, and countless precious memories. Watching you grow and thrive has been the greatest blessing.

                        </p>
                        <a href="story.html">Read more</a>
                    </div>
                    <div class="story-card">
                        <img src="path/to/story4.jpg" alt="Story 4"/>
                        <h3>Story 4 Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, enim eu varius viverra, mauris urna
                            euismod enim, id viverra velit dui in urna.</p>
                        <a href="story.html">Read more</a>
                    </div>
                </div>
            </section>

            <section class="featured-stories">
                    <h2>More Stories</h2>
                    <div class="story-grid">
                        
                    </div>
                </section>
            
                <section class="latest-news">
                    <h2>Latest News</h2>
                    <div class="news-grid">
                        <div class="news-card">
                            <img src="path/to/news1.jpg" alt="News 1" />
                            <h3>News 1 Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, enim eu varius viverra,
                                mauris urna euismod enim, id viverra velit dui in urna.</p>
                            <a href="news.html">Read more</a>
                        </div>
                        <div class="news-card">
                            <img src="path/to/news2.jpg" alt="News 2" />
                            <h3>News 2 Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, enim eu varius viverra,
                                mauris urna euismod enim, id viverra velit dui in urna.</p>
                            <a href="news.html">Read more</a>
                        </div>

                        <div class="news-card">
                            <img src="path/to/news3.jpg" alt="News 3" />
                            <h3>News 3 Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, enim eu varius viverra, mauris urna
                                euismod enim, id viverra velit dui in urna.</p>
                            <a href="news.html">Read more</a>
                        </div>
                        <div class="news-card">
                            <img src="path/to/news4.jpg" alt="News 4" />
                            <h3>News 4 Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, enim eu varius viverra, mauris urna
                                euismod enim, id viverra velit dui in urna.</p>
                            <a href="news.html">Read more</a>
                        </div>
                    </div>
                </section>

                <section class="search">
                    <h2>Search</h2>
                    <form>
                        <input type="text" placeholder="Enter keywords" />
                        <button type="submit">Search</button>
                    </form>
                </section>
                
                <section class="comments">
                    <h2>Comments</h2>
                    <div class="comment-list">
                        <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p class="comment-author">- John Doe</p>
                        <p class="timestamp">2 hours ago</p>
                    </div>

                    <div class="comment">
                        <p class="comment-text">Nullam eget nisl vel justo lobortis posuere.</p>
                        <p class="comment-author">- Jane Smith</p>
                        <p class="timestamp">1 day ago</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Name" />
                        <textarea placeholder="Comment"></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                </section>

                <section class="social-sharing">
                    <h2>Share this post:</h2>
                    <div class="social-buttons">
                        <a href="facebook.com" class="share-button facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
                        <a href="www.twitter.com" class="share-button twitter"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="www.linkedin.com" class="share-button linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                </section>
            </main>
            );
    }
}

export default Home;