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
              To be finished after the project is finished
            </h4>
            <p>
              tbc.
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
              This is a small entertaining project where I practiced integrating public API with my own app, 
              and parsing request queries. Lots of efforts were put into tuning up the API, for example filtering out
              artworks without image data, and forming the search keywords carefully for it to return the most 
              relevant results. 
            </p>
            <p>
              Many result objects returned by the API upon searching have part of their information missing. 
              Some are titles, some are authors, and others 
              are images. For this project I choose to use default value for any missing part, but still show 
              all the result objects. In a more formal situation, objects without image should be removed.

            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[0]} className='zoom-in' target='_blank' >
              <img src={project.images[0]}/>
            </a>
            <a href={project.images[1]} className='zoom-in' target='_blank' >
              <img src={project.images[1]}/>
            </a>
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
              The structure of this programme has three parts: client, server and communal part. The file structure
              is shown here: 
            </p>
            <p>
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
              Server and clients communicate by sending each other one of the two objects per conversation: 
              User and Message. The server needs to start prior to the client for the communication to happen.
            </p>
            <p>
              The first time a client connects to the server, it sends a User object containing username and 
              password for the server to verify. If it is a valid user, the server designates a socket for the client,
              then starts a thread to keep the socket running, and finally stores the user-socket pair in the 
              thread manager, so that to keep track of it. This server-side socket since awaits for 
              any requests sent by the user through Message, such as "get online user list", "send message to another
              user", "exit", and returns a Message or does some operations accordingly.
            </p>
            <p>
              On the other hand, when the client successfully connects to the server, it also opens a socket 
              and starts a thread to keep it running, and then hands the thread to the thread manager (though in this project 
              only one socket is needed, the manager is kept for possible extension). While the user could send 
              any requests to the server with the main thread, this socket is kept for receiving Messages returned by
              the server.
            </p>
            <h4>
              Send messages to offline users
            </h4>
            <p>
              If one or more message(s) are sent to an offline user, the server will detect the receiver
              being offline and store the messages for it. This storing process is done by a designated class 
              ManageStoredMessage, it keeps a ConcurrentHashMap with key being userId, and value being ArrayList
              for Message. This structure makes it able to store multiple messages for any receiver.
              Anytime a user logs in, which means connecting to the server, the server calles a function within
              ManageStoredMessage, to deliver all stored messages for this user, if there is any.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[0]} className='zoom-in' target='_blank' >
              <img src={project.images[0]}/>
            </a>
            {/* <a href={project.images[1]} className='zoom-in' target='_blank' >
              <img src={project.images[1]}/>
            </a> */}
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
              To make multiple NPCs(non-player character) move simultaneously, structure shown on the below picture 
              is used. Starting from top to bottom of the hierarchy, the class Game is in charge of setting up parameters,
              running the class Panel, and data load and save. 
            </p>
            <p>
              Class Panel is the core of the game. It contains object instances of important classes, including the player,
              three managers, and a clash monitor (which will appear in the next chapter). With every loop, 
              it repaints the whole canvas to reflect the latest status 
              of every object.
            </p>
            <p>
              The three manager classes: EnemyTankManager, EnemyBulletManager, and MyBulletManager are used
              to manage the individual subclasses like EnemyTank, Bullet, etc. The most advantage of using 
              managers is increased readibility of the code, instead of having all the functions scattered in the 
              class Panel, each manager is only responsible for one type of subclasses. 
              All the managers register to listen from the game event system, which is composed of class EventBus,
              interface Event, and interface EventListener, so that they get broadcasts of any 
              game event from the system, and react to what matters to them respectively. 
            </p>
            <p>
              Take an example to see how this works. In a loop of EnemyTankManager, if any enemy tank managed by it
              is shot, the EnemyTankManager needs to 1) remove this dead tank, 2) talk to MyBulletManager
              to let it remove the bullet that hit the tank. This communication process is dealt with through
              the game event system. Upon the enemy tank being shot, the EnemyTankManager would post a event
              called "EnemyTankIsShot", passing the relevant information along, like who is shot by which bullet. Then, 
              every class that has registered to the game event system listens to this event, and see if it's relevant to them.
              MyBulletManager has been told to listen to any event called "EnemyTankIsShot", so when it hears the news,
              it processes the information along with the event, thus removes the bullet that hit the target.
              EnemyTankManager, has also been told to listen to "EnemyTankIsShot". It did not react immediately after posting 
              the event, but only when it hears the event posted by itself through the event system. So now that it hears the
              event, it removes the poor dead enemy tank according to what it has been told.
            </p>
            <p>
              Under the manager classes are the smallest units: EnemyTank and MyTank, inherited from class Tank, and class Bullet.
              Since enemy tanks and my tank behave quite differently, they are two separate classes. However, all bullets behave the same,
              so instead of having two classes for enemy bullets and my bullets, there is a boolean property in the class Bullet
              to distinguish between them.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[2]} className='zoom-in' target='_blank' >
              <img src={project.images[2]}/>
            </a>
          </div>
          <div className='para-wrapper'>
            <h4>
              Multithreading Diagram
            </h4>
            <p>
              The diagram was what I used during the development for debugging purpose. It
              shows that when the game runs, there are 5 threads going on at the same time. In addition to
              the old friends which are the three managers and the panel, there is also a thread clashMonitor running
              to detect if any tank is shot. When a tank is shot, the event is again broadcasted through the event system,  
              and ultimately goes to the relevant bulletManager and tankManager, requiring the bullet and the tank
              involved to be removed.
            </p>
          </div>
          <div className='img-wrapper'>
            <a href={project.images[3]} className='zoom-in' target='_blank' >
              <img src={project.images[3]}/>
            </a>
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