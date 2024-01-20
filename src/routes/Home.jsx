// Home.jsx
import './Home.css'; // Import your stylesheet

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1 className='titleHome'>Welcome to the Museum</h1>
      </header>
      <section className="featured-exhibits">
        <div className="exhibit">
          <img src="src\media\image-not-found.jpg" alt="Exhibit 1" className='imgHome'/>
          <h2>Ancient Artifacts</h2>
          <p>Step back in time and explore the fascinating world of ancient civilizations. Our collection of artifacts includes ancient tools, pottery, and sculptures, providing a glimpse into the daily lives of people who lived thousands of years ago. Marvel at the craftsmanship and learn about the cultural significance of each piece.</p>
        </div>
        <div className="exhibit">
          <img src="src\media\image-not-found.jpg" alt="Exhibit 2" className='imgHome' />
          <h2>Natural History</h2>
          <p>Embark on a journey through the natural world and discover the wonders of biodiversity. From fossils of prehistoric creatures to rare specimens of plants and insects, our Natural History exhibit showcases the beauty and complexity of life on Earth. Learn about the interconnectedness of ecosystems and the importance of preserving our planet's biodiversity.</p>
        </div>
        
      </section>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Guided Tours: Join us for guided tours every Saturday at 10 AM and 2 PM. Our knowledgeable guides will lead you through the exhibits, providing insights into the history and significance of each artifact.</li>
          <li>Art Workshop: Unleash your creativity in our weekly art workshop held on Sundays from 1 PM to 4 PM. Whether you're a seasoned artist or a beginner, our instructors will guide you in creating your masterpiece.</li>
          <li>Science Lecture Series: Delve into the latest scientific discoveries with our monthly lecture series. Leading experts will share their insights on topics ranging from archaeology to environmental science. Stay informed and inspired!</li>
        </ul>
      </section>
      <footer>
        <p>Visit us and embark on a journey through history, culture, and creativity. Admission is free on weekends!</p>
      </footer>
    </div>
  );
}

export default Home;
