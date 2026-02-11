import { useLoaderData, Link } from "react-router-dom"
import { IoReturnDownBack } from "react-icons/io5"
import { CiLink } from "react-icons/ci"

function CodingProject() {
  const project = useLoaderData();

  return (
    <div className='coding-project'>
      <div className='repository'>
        <a href={project.link} target="_blank">
          <CiLink /><span> Github repository</span>
        </a>
      </div>
      {project.id === 1 && (
        <div id={project.slug} className='project-wrapper'>
          <div className='para-wrapper'>
            <h4>
              To Be Continued
            </h4>
            <p>
              This project is under restructuring. Once the work is finished, this page will be updated. 
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[0]} className='zoom-in' target='_blank' >
              <img src={project.images[0]}/>
            </a>
          </div>
        
        </div>
      )}

      {project.id === 2 && (
        <div id={project.slug} className='project-wrapper'>
          <div className='para-wrapper'>
            <h4>
              Introduction
            </h4>
            <p>
              This is a small entertaining project in which I practiced integrating public API with my own application 
              and parsing request queries. Lots of efforts were devoted to tuning up the API, such as filtering out
              artworks without image data and carefully constructing search keywords to return the most 
              relevant results. 
            </p>
            <p>
              Many result objects returned by the API have incomplete information. 
              Some are missing titles, some authors, and others lack images. For this project, 
              I choose to assign default values to any missing fields while still displaying all results. 
              In a more formal environment, objects without image would be excluded.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[0]} className='zoom-in' target='_blank' >
              <img src={project.images[0]}/>
            </a>
            <p>Home page of the website</p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[1]} className='zoom-in' target='_blank' >
              <img src={project.images[1]}/>
            </a>
            <p>Search results of artist "Van Goah"</p>
          </div>
        
        </div>
      )}

      {project.id === 3 && (
        <div id={project.slug} className='project-wrapper'>
          <div className='para-wrapper'>
            <h4>
              Structure Overview
            </h4>
            <p>
              This program consists of three main components: the client, the server, and shared modules. 
              The file structure is shown below:
            </p>
            <p className='text-codeblock'>
              client<br />
              &nbsp;&nbsp;|- service<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- ClientConnectServerThread.java<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- ManageClientConnectServerThread.java<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- UserClientService.java<br />
              &nbsp;&nbsp;|- View.java<br />
              common<br />
              &nbsp;&nbsp;|- Message.java<br />
              &nbsp;&nbsp;|- MessageType.java<br />
              &nbsp;&nbsp;|- User.java<br />
              server<br />
              &nbsp;&nbsp;|- service<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- ServerConnectClientThread.java<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- ManageServerConnectClientThread.java<br />
              &nbsp;&nbsp;|&nbsp;&nbsp;|- ManageStoredMessage.java<br />
              &nbsp;&nbsp;|- Frame.java<br />
              &nbsp;&nbsp;|- Server.java<br />
            </p>
            <p>
              The server and clients communicate by exchanging two types of objects: 
              <span className='text-codepiece'>User</span> and <span className='text-codepiece'>Message</span>.
            </p>
            <p>
              The first time a client connects to the server, it sends a <span className='text-codepiece'>User</span> object
               containing username and 
              password for the server to verify. If the credentials are valid, the server assigns a socket to 
              the client, starts a dedicated thread to maintain the connection, and stores the user-socket pair
              in the thread manager for tracking purposes.
            </p>
            <p>
              This server-side socket then listens for requests sent by the client through 
              <span className='text-codepiece'>Message</span> objects, 
              such as “get online user list”, “send message to another user”, and “exit”. The server responds 
              by returning appropriate <span className='text-codepiece'>Message</span> objects or performing 
              the required operations.
            </p>
            <p>
              On the client side, once the connection is established, a socket is also opened and maintained by a 
              dedicated thread. This thread is registered with the thread manager (although only one socket 
              is required in this project, the manager is retained for future extensibility). While the main 
              thread handles user input and sends requests, this socket thread is responsible for receiving 
              messages from the server.
            </p>
            <h4>
              Store Messages For Offline Users
            </h4>
            <p>
              When messages are sent to an offline user, the server detects that the recipient 
              is unavailable and stores the messages for later delivery. This process is handled by a designated
              class, <span className='text-codepiece'>ManageStoredMessage</span>, which maintains a ConcurrentHashMap where 
              the key is the user ID and the value is an ArrayList of <span className='text-codepiece'>Message</span> objects.
            </p>
            <p>
              This structure enables the system to store multiple messages for each offline user efficiently.
              Whenever a user logs in and reconnects to the server, the server invokes a method 
              in <span className='text-codepiece'>ManageStoredMessage</span> to deliver any stored messages to that user.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[0]} className='zoom-in' target='_blank' >
              <img src={project.images[0]}/>
            </a>
            <p>Endpoints communicate through User and Message objects</p>
          </div>
        
        </div>
      )}

      {project.id === 4 && (
        <div id={project.slug} className='project-wrapper'>
          <div className='para-wrapper'>
            <h4>
              Structure Overview
            </h4>
            <p>
              To enable multiple NPCs (non-player characters) to move simultaneously, the structure shown 
              in the diagram below is used. From top to bottom in the hierarchy, 
              the <span className='text-codepiece'>Game</span> class is responsible for setting parameters, 
              launching the <span className='text-codepiece'>Panel</span> class, and handling data loading and saving.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[2]} className='zoom-in' target='_blank' >
              <img src={project.images[2]}/>
            </a>
            <p>Diagram showing the structure of this project</p>
          </div>
          <div className='para-wrapper'>
            <p>
              The <span className='text-codepiece'>Panel</span> class is the core of the game. 
              It contains instances of key components, including the player, three manager classes, and a 
              collision monitor (introduced in the last section). During each game loop, it repaints the entire
              canvas to reflect the latest state of all objects.
            </p>
            <p>
              The three manager classes — <span className='text-codepiece'>EnemyTankManager</span>, 
              <span className='text-codepiece'>EnemyBulletManager</span>, 
              and <span className='text-codepiece'>MyBulletManager</span> — are responsible for managing 
              their respective subclasses, such 
              as <span className='text-codepiece'>EnemyTank</span> and <span className='text-codepiece'>Bullet</span>. 
              The main advantage of using manager classes is improved code readability and maintainability. 
              Instead of concentrating all logic within <span className='text-codepiece'>Panel</span>, each manager 
              focuses on a specific type of object. 
            </p>
            <p>
              All managers are registered with the game event system, which consists of 
              the <span className='text-codepiece'>EventBus</span> class and 
              the <span className='text-codepiece'>Event</span> and <span className='text-codepiece'>EventListener</span> interfaces. 
              This system allows them to receive broadcasts of game events and respond only to relevant ones. 
            </p>
            <h4>
              Event System Example
            </h4>
            <p>
              The following example illustrates how the event system operates.
            </p>
            <p>
              During a loop in <span className='text-codepiece'>EnemyTankManager</span>, if an enemy tank is hit,
              the manager must:
            </p>
            <ol>
              <li>Remove the destroyed tank</li>
              <li>Notify <span className='text-codepiece'>MyBulletManager</span> to remove the bullet that 
              caused the hit</li>
            </ol>
            <p>
              This communication is handled through the event system. When a tank is 
              shot, <span className='text-codepiece'>EnemyTankManager</span> posts an event 
              named <span className='text-codepiece'>"EnemyTankIsShot"</span>, including relevant 
              information such as which tank was hit and by which bullet.
            </p>
            <p>
              All registered listeners receive this event and determine whether it applies to them. 
              Since <span className='text-codepiece'>MyBulletManager</span> is configured to listen 
              for <span className='text-codepiece'>"EnemyTankIsShot"</span>, it processes the event 
              and removes the corresponding bullet.
            </p>
            <p>
              <span className='text-codepiece'>EnemyTankManager</span> is also registered for this event.
              Rather than acting immediately after posting it, the manager responds when it receives the 
              event through the system, at which point it removes the destroyed enemy tank.
            </p>
            <p>
              This design promotes loose coupling and improves modularity between system components.
            </p>
            <h4>
              Multithreading Diagram
            </h4>
            <p>
              The diagram was used during development for debugging purposes. It illustrates that five
              threads run simultaneously during gameplay.
            </p>
            <p>
              In addition to the three manager threads and the <span className='text-codepiece'>Panel</span> thread,
              a <span className='text-codepiece'>ClashMonitor</span> thread continuously checks for 
              collisions between tanks and bullets. When a collision is detected, an event is broadcast 
              through the event system. This event is then handled by the 
              relevant <span className='text-codepiece'>BulletManager</span> and <span className='text-codepiece'>TankManager</span>, 
              which remove the corresponding bullet and tank from the game.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[3]} className='zoom-in' target='_blank' >
              <img src={project.images[3]}/>
            </a>
            <p>Diagram showing all the running threads while the game is on</p>
          </div>
        </div>
      )}

      <Link to='../' className='return'>
        <IoReturnDownBack />
        <span> Return</span>
      </Link>
    </div>
  )
}

export default CodingProject;